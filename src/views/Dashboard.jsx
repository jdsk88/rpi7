import { IconButton, TextField } from "@material-ui/core";
import { CameraAltOutlined, Send } from "@material-ui/icons";
import { Box } from "@mui/system";
import { SocialFeed } from "../components/atoms/DashFeed/SocialFeed";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { userData } from "../reducers/user";
import { feedsData } from "../reducers/feeds";
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
  
  const [content, setContent] = useState("");
  const [files, setFiles] = useState({
    selectedFile: null,
  });
  const dispatch = useDispatch();
  const onFilesChange = async (files) => {
    if (files.length !== 0) {
      setFiles({
        selectedFile: window.URL.createObjectURL(files[0]),
        loaded: 0,
      });
    }
  };
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant, v) => {
    enqueueSnackbar(msg, { variant });
  };

  const handleAddFeed = (event) => {
    event.preventDefault();
    const feed = {
      index: fData.length < 0 ? fData.lenghth : fData.length,
      location: location.formattedAddress,
      userId: user._id,
      avatar: user.avatar,
      title: user.first_name + " " + user.last_name,
      subTitle: moment().format("lll"),
      content: content,
      comments: [],
      likes: [],
      images: files,
    };
if(content < 3){
  Snackbar("Please type feed message or image","warning")
}else{
    
    dispatch(add(feed));
    setFiles({
      selectedFile: null,
    });
    setContent("");}
  };

  useEffect(() => {
    setUser(uData);
  }, [uData]);

  return (
    <>
      <Box
        style={{ padding: 5 }}
        sx={{
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          background: "white",
          zIndex: 1,
        }}
        component="form"
        noValidate
        onSubmit={handleAddFeed}
      >
        <TextField
          inputProps={{
            maxLength: 1024,
          }}
          required
          // label="Whats up ... ?"
          name="feed_msg"
          id="feed_msg"
          style={{ width: "70%" }}
          variant="outlined"
          multiline
          maxRows={10}
          size="small"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />

        <input
          type="file"
          accept={".gif, .jpg, .jpeg, .mp4, .png, .svg"}
          multiple
          onChange={(e) => {
            onFilesChange(e.currentTarget.files);
          }}
          id="icon-button-file"
          style={{ display: "none" }}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            // color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CameraAltOutlined />
          </IconButton>
        </label>
        <IconButton color="primary" style={{ width: "10%" }} type="submit">
          <Send />
        </IconButton>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          // marginBottom: 60,
        }}
      >
        {fData.map((feed, index) => (
          <SocialFeed key={index} feed={feed} />
        ))}
      </div>
    </>
  );
};
