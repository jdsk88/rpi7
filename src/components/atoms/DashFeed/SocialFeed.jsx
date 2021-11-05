import React, { useEffect, useState } from "react";
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
  ThumbUpAltOutlined,
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
import { addComment } from "../../../reducers/feeds";
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
  const CHARACTER_LIMIT = 255;
  const [values, setValues] = React.useState({
    name: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  useEffect(() => {
    setUser(uData);
  }, [uData]);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const handleAddComment = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const comment = {
      feedIndex: feed.index,
      userId: user._id,
      userName: user.first_name,
      userAvatar: user.avatar,
      message: data.get("comment_msg"),
      dateOfComment: moment().format("lll"),
    };
    dispatch(addComment(comment));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandComments = () => {
    setCommentsExpanded(!commentsExpanded);
  };
  console.log(feed.index);
  return (
    <Card>
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
      <CardMedia
        component="img"
        height="194"
        style={{ objectFit: "scale-down" }}
        image={
          feed.images
            ? feed.images[0]
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        alt={feed.subTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
        <IconButton style={{ width: "15%" }} aria-label="share">
          <ThumbUpAltOutlined />
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
        <CardContent>
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
            <Typography>
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
              // label="comment message here"
              autoFocus
              name="comment_msg"
              id="comment_msg"
              // style={{ width: "60%" }}
              variant="outlined"
              size="small"
              onChange={handleChange("name")}
              //   id={}
            />
            <IconButton
            // style={{ color: "rgb(0,0,0,1)" }}
            >
              <CameraAltOutlined />
            </IconButton>
            <input
              type="file"
              // ref={(fileUpload) => {
              //   this.fileUpload = fileUpload;
              // }}
              style={{ visibility: "hidden", display: "none" }}
              // onChange={this.groupImgUpload}
            />
            <IconButton type="submit">
              <Send />
            </IconButton>
          </Box>
        </CardContent>
        <CardContent>
          <ExpandMore expand={commentsExpanded} onClick={handleExpandComments}>
            {commentsExpanded ? <ArrowUpward /> : <ArrowDownward />}
          </ExpandMore>
          <Collapse in={commentsExpanded} timeout="auto" unmountOnExit>
            {feed.comments
              ? feed.comments.map((comment, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      style={{ width: "80%", overflowWrap: "anywhere" }}
                      primary={comment.message}
                      secondary={`${comment.userName} at ${comment.dateOfComment}`}
                    />
                    <IconButton style={{ width: "5%" }}></IconButton>
                    <ListItemAvatar style={{ width: "10%", paddingLeft: 20 }}>
                      <Avatar src={comment.userAvatar} alt="avatar" />
                    </ListItemAvatar>
                  </ListItem>
                ))
              : ""}
          </Collapse>
        </CardContent>
      </Collapse>
    </Card>
  );
};
