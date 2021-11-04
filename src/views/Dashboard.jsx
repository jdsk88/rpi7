import { IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { Box } from "@mui/system";
import { SocialFeed } from "../components/atoms/DashFeed/SocialFeed";
import React, { useEffect, useState } from "react";
import "./style.css";
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
  const [feeds] = useState([]);

  const [file, setFile] = useState([]);
  // console.log(file.preview.url)
  const onFilesChange = (files) => {
    console.log(files);
    setFile(files[0]);
  };

  // const onFilesError = (error, file) => {
  //   console.log("error code " + error.code + ": " + error.message);
  // };

  const [location, setLocation] = useState([]);
  // const [reload, setReload] = useState(false);
  const Geolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      // let accuracy = position.coords.accuracy;
      // let altitude = position.coords.altitude;
      // let altitudeAccuracy = position.coords.altitudeAccuracy;
      // let heading = position.coords.heading;
      // let speed = position.coords.speed;
      setLocation({ latitude, longitude });
      // setReload(!reload);
    });
  };
  Geolocation();
  console.log(location);

  const handleAddFeed = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const feed = {
      location: location,
      userId: user._id,
      avatar: user.avatar,
      title: user.first_name + " " + user.last_name,
      subTitle: moment().format("lll"),
      content: data.get("feed_msg"),
      comments: [],
      images: [window.URL.createObjectURL(file)],
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
          style={{ width: "70%" }}
          variant="outlined"
          size="small"
        />
        <input
          style={{ width: "12.5%" }}
          type="file"
          className={"file"}
          disableUnderline
          accept={".jpg, .jpeg, .mp4, .png"}
          multiple
          onChange={(e) => {
            onFilesChange(e.currentTarget.files);
          }}
        />

        <IconButton style={{ width: "10%" }} type="submit">
          <Send />
        </IconButton>
      </Box>
    </>
  );
};
