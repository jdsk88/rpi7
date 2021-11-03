import { Button, Icon, IconButton, Input, TextField } from "@material-ui/core";
import { CameraAltOutlined, Send } from "@material-ui/icons";
import { Box } from "@mui/system";
import { SocialFeed } from "../components/atoms/DashFeed/SocialFeed";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { userData } from "../reducers/user";
import moment from "moment";

export const DashBoard = () => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setUser(uData);
  }, [uData]);
  const [feeds, setFeeds] = useState([]);

  const handleAddFeed = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const feed = {
      location: "EuroSpar Kraków",
      userId: user._id,
      avatar: user.avatar,
      title: user.first_name + " " + user.last_name,
      subTitle: moment().format("lll"),
      content: data.get("feed_msg"),
      comments: [],
      images: [
        "data:image/jpeg;base64,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",
      ],
    };

    // setFeeds([...feeds, feed]);
    feeds.push(feed);
    console.log(feed);
    setReload(!reload);
  };

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        {feeds.map((feed) => (
          <SocialFeed key={Math.random(11111, 22222)} feed={feed} />
        ))}
      </div>
      <Box
        style={{ padding: 10 }}
        sx={{
          position: "fixed",
          // padding: 1,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          background: "whitesmoke",
          zIndex: 1,
        }}
        component="form"
        noValidate
        onSubmit={handleAddFeed}
      >
        <TextField
          require={true}
          label="Whats up ... ?"
          name="feed_msg"
          id="feed_msg"
          // style={{ width: "80%" }}
          variant="outlined"
          size="small"
        />
        <form method="post" enctype="multipart/form-data">
          <input
            type="file"
            hidden
            disableUnderline
            accept={".jpg, .jpeg, .png"}
            multiple
          />
        </form>

        <IconButton type="submit">
          <Send />
        </IconButton>
      </Box>
    </>
  );
};
