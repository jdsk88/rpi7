import { IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { Box } from "@mui/system";
import { SocialFeed } from "../components/atoms/DashFeed/SocialFeed";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { userData } from "../reducers/user";
import feeds, { feedsData } from "../reducers/feeds";
import moment from "moment";
import { DataContext } from "../context/DataContext";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { add } from "../reducers/feeds";

export const DashBoard = () => {
  const { location } = useContext(DataContext);
  const uData = useSelector(userData);
  const fData = useSelector(feedsData.get);
  const [user, setUser] = useState(uData);
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const onFilesChange = async (files) => {
    setFiles(files);
  };
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant, v) => {
    enqueueSnackbar(msg, { variant });
  };

  const handleAddFeed = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const feed = {
      index: fData.length < 0 ? fData.lenghth : fData.length,
      location: location.formattedAddress,
      userId: user._id,
      avatar: user.avatar,
      title: user.first_name + " " + user.last_name,
      subTitle: moment().format("lll"),
      content: data.get("feed_msg"),
      comments: [],
      images: files,
    };
    dispatch(add(feed));
  };

  useEffect(() => {
    setUser(uData);
  }, [uData]);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min * max;
  }
  return (
    <>
      <div style={{ marginBottom: 50 }}>
        {fData.map((feed, index) => (
          <SocialFeed key={index} feed={feed} />
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
          required
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
