import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { AuthService, token, userId } from "../../../../services/authorization/auth";
import { setLogged, fetchUserById } from "../../../../reducers/user";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { Copyright } from "../../../atoms/copyright/copyright";
import { UserServices } from "../../../../services/users/users";
import { routes } from "../../../../routes";

const theme = createTheme();
export const SignIn = () => {
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    UserServices.logIn(userData)
      .then((resp) => {
        token.set(resp.data.token);
        userId.set(resp.data._id)
        dispatch(fetchUserById(userId.get()))
        dispatch(setLogged());
        Snackbar(
          ` Welcome ${resp.data.first_name} ${resp.data.last_name}`,
          "success"
        );
      })
      .catch((err) => {
        if (err.response.status === 409) {
          Snackbar("Invaid email or password!", "error");
        } else if (err.response.status === 400) {
          Snackbar("All fields are required", "error");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              sx={{ mt: 0, mb: 1 }}
              variant="contained"
              color="warning"
              component={Link}
              to={routes.reset}
            >
              Forgot password?
            </Button>
            <Button
              component={Link}
              to={routes.signup}
              fullWidth
              sx={{ mt: 0, mb: 1 }}
              variant="contained"
              color="success"
            >
              Need an account? Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
