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
  MessageOutlined,
  PinDropOutlined,
  Send,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import {
  Badge,
  Button,
  Divider,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { Box } from "@mui/system";

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
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setUser(uData);
  }, [uData]);

  const [expanded, setExpanded] = useState(false);

  const handleAddComment = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const comment = {
      userId: user._id,
      userName: user.first_name,
      userAvatar: user.avatar,
      message: data.get("comment_msg"),
      dateOfComment: moment().format("lll"),
    };
    console.log(comment);
    // setFeed(feed.comments.push(comment))
    feed.comments.push(comment);
    setReload(!reload);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          {feed.comments
            ? feed.comments.map((comment) => (
                <ListItem key={comment.dateOfComment + comment.userId}>
                  <ListItemText
                    primary={comment.message}
                    //    primary={`${user.first_name} ${user.last_name}`}
                    secondary={`${comment.userName} at ${comment.dateOfComment}`}
                  />
                  <ListItemAvatar>
                    <Avatar src={comment.userAvatar} alt="avatar" />
                  </ListItemAvatar>
                </ListItem>
              ))
            : ""}
        </CardContent>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
            component="form"
            noValidate
            onSubmit={handleAddComment}
          >
            <TextField
              require={true}
              label="comment message here"
              autoFocus
              name="comment_msg"
              id="comment_msg"
              style={{ width: "80%" }}
              variant="outlined"
              size="small"
            //   id={}
              />
            <IconButton style={{ width: "5%" }}></IconButton>
            <Button type="submit" style={{ width: "10%" }} aria-label="share">
              <Send />
            </Button>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};
