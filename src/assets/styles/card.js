import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: "auto",
    // marginTop: 2.5,
    marginBottom: 7.5,
  },
  root2: {
    width: "100%",
    height: "auto",
    // marginTop: 2.5,
    marginBottom: 7.5
  },
  media: {
    width: "95%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    objectFit:"cover",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    position: "fixed",
    top: 56,
    bottom: 0,
    left: 0,
    right: "50vw",
    backgroundColor: "whitesmoke",
    color: "red",
    zIndex: 1,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "transparent",
  },
  cardViewActions: {
    height: 50,
    display: "flex",
    justifyContent: "space-around",
    lineHeight: 50,
    textAlign: "center",
  },
  button: {
    transform: "rotate(90deg)",
    writingMode: "v",
    textOrientation: "upright",
  },
}));
