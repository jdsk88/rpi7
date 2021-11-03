import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Send, MoreVert } from "@material-ui/icons";
import { useStyles } from "../../../../assets/styles/card";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

export const ProductADD = () => {
  const classes = useStyles();

  const [NAME, setNAME] = useState("");
  // const [TAGS, setTAGS] = useState("");
  const [NOTE, setNOTE] = useState("");
  const [UNIT_PRICE, setUNIT_PRICE] = useState("");
  const [IMAGES, setIMAGES] = useState("");
  // const [PRODUCT_GROUP_ID, setPRODUCT_GROUP_ID] = useState("");
  const [PRODUCT_GROUP, setPRODUCT_GROUP] = useState("");
  // const [ACTIVE, setACTIVE] = useState(true);

  // const [product, setProduct] = useState({
  //   Name: "NAME",
  //   Tags: "TAGS",
  //   Note: "NOTE",
  //   Unit_price: 999.99,
  //   Images: ["img", "img2"],
  //   Product_group_ID: "PRODUCT_GROUP_ID",
  //   Product_group: "PRODUCT_GROUP",
  //   Active: "ACTIVE",
  // });

  const ADD_PRODUCT = async () => {};
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TextField
        fullWidth
        className={classes.name}
        value={NAME}
        onChange={(e) => setNAME(e.target.value)}
        id="outlined-basic"
        label="Name"
        placeholder={NAME}
        variant="standard"
        required
      />

      <TextField
        fullWidth
        value={PRODUCT_GROUP}
        onChange={(e) => setPRODUCT_GROUP(e.target.value)}
        id="outlined-basic"
        label="Product_group"
        placeholder={PRODUCT_GROUP}
        variant="standard"
      />

      <CardMedia
        // onClick={imageToggle}
        className={classes.media}
        image={IMAGES}
        title={`${PRODUCT_GROUP} - ${NAME}`}
      />
      <CardContent>
        {/* {image?( */}
        <Typography variant="body2" color="textSecondary" component="p">
          <TextField
            fullWidth
            value={IMAGES}
            onChange={(e) => setIMAGES(e.target.value)}
            id="outlined-basic"
            label="Image URL"
            placeholder={IMAGES}
            variant="standard"
          />
        </Typography>
        {/*  ):(<></>)} */}
        <Typography variant="body2" color="textSecondary" component="p">
          <TextField
            fullWidth
            multiline={true}
            rowsMax={10}
            value={NOTE}
            onChange={(e) => setNOTE(e.target.value)}
            id="outlined-basic"
            label="note"
            placeholder={NOTE}
            variant="standard"
          />
        </Typography>
        <CardActions disableSpacing className={classes.cardViewActions}>
          <Typography variant="body2" color="textSecondary" component="p">
            <TextField
            fullWidth
            value={UNIT_PRICE}
              onChange={(e) => setUNIT_PRICE(e.target.value)}
              id="outlined-basic"
              label="Unit_price"
              placeholder={UNIT_PRICE}
              variant="standard"
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TextField
            fullWidth
              id="outlined-basic"
              label="Quantity"
              type="number"
              variant="standard"
            />
          </Typography>
        </CardActions>
      </CardContent>
      <Button
        fullWidth
        variant="contained"
        // disabled
        size="large"
        color="primary"
        onClick={() => {
          ADD_PRODUCT();
        }}
        startIcon={<Send />}
      >
        CREATE PRODUCT
      </Button>
    </ThemeProvider>
  );
};
