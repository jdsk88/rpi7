import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { userData } from "../../../reducers/user";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import {
  ArrowDownward,
  ArrowUpward,
  CameraAltOutlined,
  MessageOutlined,
  PinDropOutlined,
  Send,
  ThumbDownAltOutlined,
  ThumbUpAlt,
} from "@material-ui/icons";
import {
  Badge,
  Divider,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { addFComment } from "../../../reducers/feeds";
import { getRandomIntInclusive } from "../../../views/Dashboard";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const SocialFeed = ({ feed }) => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  const CHARACTER_LIMIT = 255;
  const [likes] = useState({ userId: user._id, like: false });
  const [like, setLike] = useState(false);
  const lastComment = feed.comments.at(-1);
  const handleLike = () => {
    if (!like === true) {
      likes.like = true;
    } else {
      likes.like = false;
    }
    setLike(!like);
    console.log(likes);
  };
  const [values, setValues] = React.useState({
    name: "",
  });

  const [files, setFiles] = useState({
    selectedFiles: undefined,
  });
  const onFilesChange = async (files) => {
    if (files.length !== 0) {
      setFiles({
        selectedFiles: files,
      });
    }
  };

  // const [files, setFiles] = useState({
  //   selectedCFiles: undefined,
  // });
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant, v) => {
    enqueueSnackbar(msg, { variant });
  };
  // const onFilesChange = async (files) => {
  //   if (files.length !== 0) {
  //     setFiles({
  //       selectedCFiles: window.URL.createObjectURL(files[0]),
  //       loaded: 0,
  //     });
  //   }
  // };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const handleAddComment = (event) => {
    event.preventDefault();
    const commentId = getRandomIntInclusive(1000000000, 9999999999);
    let filesUrl = [];
    console.log(files);
    if (files.selectedFiles !== undefined) {
      for (let file in Array.from(files.selectedFiles)) {
        filesUrl.push({
          fileName:
            commentId + "_" + Array.from(files.selectedFiles)[file].name,
          url: `${"https://localhost:8989"}/images/${
            Array.from(files.selectedFiles)[file].name
          }`,
          tags: [],
        });
      }
    }
    const comment = {
      feedId: feed._id,
      feedIndex: feed.index,
      userId: user._id,
      userName: user.first_name,
      userAvatar: user.avatar,
      message: values.name,
      dateOfComment: moment().format("lll"),
      image: filesUrl,
    };
    if (values.name <= 3) {
      Snackbar("Please type comment message", "warning");
    } else {
      console.log(comment);
      dispatch(addFComment(comment));
      setFiles({
        selectedCFiles: undefined,
      });
      setValues({ name: "" });
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandComments = () => {
    setCommentsExpanded(!commentsExpanded);
  };

  useEffect(() => {
    setUser(uData);
  }, [uData]);

  return (
    <Card style={{ marginBottom: 5, maxWidth: 750 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            src={feed.avatar}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        title={feed.title}
        subheader={feed.subTitle}
      />
      {/* {feed.images <= 0 ? ( */}
      <CardMedia
        component="img"
        style={{ objectFit: "cover" }}
        image={feed.images !== 0 ? feed.images[0].url : ""}
        // image={feed.images !== 0 ? feed.images[0].url : ""}
        alt={feed.subTitle}
      />
      {/* ) : ( */}
      <></>
      {/* )} */}
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ overflowWrap: "anywhere" }}
        >
          {feed.content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
          textAlign: "left",
        }}
      >
        <Icon style={{ width: "15%" }} aria-label="add to favorites">
          <PinDropOutlined />
        </Icon>
        <Typography style={{ width: "55%" }}>{feed.location}</Typography>
        <IconButton
          style={{ width: "15%" }}
          aria-label="share"
          onClick={handleLike}
        >
          {like ? <ThumbUpAlt color={"primary"} /> : <ThumbDownAltOutlined />}
        </IconButton>
        <ExpandMore
          style={{ width: "15%" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Badge
            badgeContent={feed.comments ? feed.comments.length : ""}
            color="primary"
          >
            <MessageOutlined />
          </Badge>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent style={{ padding: 8 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 0,
              alignItems: "center",
            }}
            component="form"
            noValidate
            onSubmit={handleAddComment}
          >
            <Typography style={{ width: "15%" }}>
              {values.name.length}/{CHARACTER_LIMIT}
            </Typography>
            <p></p>
            <TextField
              inputProps={{
                maxLength: CHARACTER_LIMIT,
              }}
              // helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
              required
              multiline
              maxRows={5}
              style={{ width: "55%" }}
              // label="comment message here"
              autoFocus
              name="comment_msg"
              id="comment_msg"
              variant="outlined"
              size="small"
              onChange={handleChange("name")}
              value={values.name}
            />
            <input
              type="file"
              accept={".gif, .jpg, .jpeg, .mp4, .png, .svg"}
              multiple
              onChange={(e) => {
                onFilesChange(e.currentTarget.files);
              }}
              id="icon-button-file2"
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file2">
              <IconButton
                // color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CameraAltOutlined />
              </IconButton>
            </label>
            <IconButton type="submit" style={{ width: "15%" }}>
              <Send />
            </IconButton>
          </Box>
        </CardContent>
        <CardContent
          style={{ padding: 8 }}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "stretch",
            textAlign: "left",
          }}
        >
          <ListItem key={"index"}>
            <ListItemAvatar>
              <Avatar
                src={lastComment ? lastComment.userAvatar : ""}
                alt="avatar"
              />
            </ListItemAvatar>
            <ListItemText
              style={{ overflowWrap: "anywhere" }}
              primary={
                lastComment
                  ? `${lastComment.message.substring(0, 20)}...`
                  : " No Comments yet"
              }
              secondary={
                lastComment
                  ? `${lastComment.userName} at ${lastComment.dateOfComment}`
                  : ""
              }
            />
            <ExpandMore
              style={{ width: "15%", display: "flex", flexDirection: "column" }}
              expand={commentsExpanded}
              onClick={handleExpandComments}
            >
              {commentsExpanded ? (
                <>
                  <ArrowUpward />
                  <Typography>less</Typography>
                </>
              ) : (
                <>
                  <ArrowDownward />
                  <Typography>more</Typography>
                </>
              )}
            </ExpandMore>
          </ListItem>
        </CardContent>
        <CardContent>
          <Collapse in={commentsExpanded} timeout="auto" unmountOnExit>
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {feed.comments
                ? feed.comments.map((comment, index) => (
                    <ListItem key={index}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          background: "rgb(180,222,233,.2)",
                          borderRadius: "10px 10px 10px 10px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            objectFit: "scale-down",
                          }}
                          image={comment.image !== 0 ? comment.image : " "}
                          alt={feed.subTitle}
                        />
                        <ListItemText
                          style={{
                            width: "100%",
                            overflowWrap: "anywhere",
                            padding: 15,
                            borderRadius: 25,
                            overflowY: "scroll",
                          }}
                          primary={comment.message}
                          secondary={`${comment.userName} at ${comment.dateOfComment}`}
                        />
                      </div>

                      <ListItemAvatar style={{ width: "10%", paddingLeft: 20 }}>
                        <Avatar src={comment.userAvatar} alt="avatar" />
                      </ListItemAvatar>
                    </ListItem>
                  ))
                : ""}
            </div>
          </Collapse>
        </CardContent>
      </Collapse>
    </Card>
  );
};
