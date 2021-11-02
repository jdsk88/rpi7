import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { listData } from "./listData";
import renderList from "./listItems";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import { routes } from "../../../routes";
import { Admin } from "../../../views/Admin";
import { createTheme, ListItemText, ThemeProvider } from "@material-ui/core";
import { Profile } from "../../../views/Profile";
import { Products } from "../../../views/Products";
import { ProductCreator } from "../../../views/ProductCreator";
import { ListItem, ListItemIcon } from "@mui/material";
import { AuthService } from "../../../services/authorization/auth";
import { useDispatch } from "react-redux";
import { setLogged } from "../../../reducers/user";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const AppRouter = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    AuthService.removeToken();
    AuthService.removeUser();
    dispatch(setLogged());
    console.log("You were successfully logged out!");
  };

  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const userList = listData.user;
  const adminList = listData.admin;
  const profileList = listData.profile;

  return (
    <Router>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                onTouchMove={() => setOpen(!open)}
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(!open)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                style={{
                  cursor: "pointer",
                  marginLeft: 10,
                  textTransform: "capitalize",
                }}
                onClick={() => setOpen(!open)}
                align="center"
                variant="h6"
                noWrap
                component="div"
              >
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            onTouchMove={() => setOpen(!open)}
            onClick={() => setOpen(!open)}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
            </DrawerHeader>
            <Divider />
            {renderList({ open, setOpen, setTitle }, userList)}
            <Divider />
            {renderList({ open, setOpen, setTitle }, adminList)}
            <Divider />

            {renderList({ open, setOpen, setTitle }, profileList)}
            <ListItem
              onClick={() => {
                setOpen(!open);
                handleSignOut();
              }}
              button
              component={Link}
              to={routes.signin}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Log out"} />
            </ListItem>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Switch>
              <Route path={routes.admin}>
                <Admin />
              </Route>
              <Route path={routes.dashboard}>
              </Route>
              <Route path={routes.orders}></Route>
              <Route path={routes.merchants}>
                <h1>31gtedgdsahgdsa</h1>
              </Route>
              <Route path={routes.products}>
                <Products />
              </Route>
              <Route path={routes.productCreator}>
                <ProductCreator />
              </Route>
              <Route path={routes.employers}>
                <h1>31gtedgdsahgdsa</h1>
              </Route>
              <Route path={routes.messages}></Route>
              <Route path={routes.map}>
                <h1>31gtedgdsahgdsa</h1>
              </Route>
              <Route path={routes.profile}>
                <Profile />
              </Route>
              <Route path={routes.nowhere}>
                <Redirect to={routes.dashboard} />
              </Route>
            </Switch>
          </Main>
        </Box>
      </ThemeProvider>
    </Router>
  );
};
