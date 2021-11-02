import * as React from "react";
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
import { AddShoppingCart } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import img from "../../../../assets/img/litleBear.png";
import img2 from "../../../../assets/img/logo192.png";
import { useStyles } from "../../../../assets/styles/card";
import { DataContext } from "../../../../context/DataContext";
const product = {
  Name: "NAME",
  Tags: "TAGS",
  Note: "NOTE",
  Unit_price: 999.99,
  Images: [img, img2],
  Product_group_ID: "PRODUCT_GROUP_ID",
  Product_group: "PRODUCT_GROUP",
  Active: "ACTIVE",
};
export const FeedCard = () => {
  const { display } = React.useContext(DataContext);
  const classes = useStyles();
  return (
    <Card
      //  key={id}
      className={display[0] > 750 ? classes.root : classes.root2}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={img2} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.Name}
        subheader={product.Product_group}
      />
      <CardMedia
        className={classes.media}
        image={product.Images[0]}
        title={`${product.Product_group} - ${product.Name}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.Name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardViewActions}>
        <Typography variant="h6" component="h2">
          {product.Unit_price}
        </Typography>
        <TextField
          style={{ width: "100px", zIndex: "0" }}
          size="small"
          id="outlined-number"
          label="Ilość"
          type="number"
          variant="outlined"
          value={100}
          //   onChange={(e) => { setQuantity(e.target.value) }}
        />
        <Button
          variant="contained"
          // color="primary"
          size="large"
          style={{ color: "white", background: "green" }}
          startIcon={<AddShoppingCart />}
          //   onClick={AddToCart}
        >
          Dodaj
        </Button>
      </CardActions>
    </Card>
  );
};
