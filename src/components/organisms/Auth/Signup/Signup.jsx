import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import { Link, useHistory } from "react-router-dom";
import { Copyright } from "../../../atoms/copyright/copyright";
import { UserServices } from "../../../../services/users/users";
import { routes } from "../../../../routes";
import { CountrySelect } from "../../../atoms/countryInput/CountryInput";
import moment from "moment";
const theme = createTheme();

export const SignUp = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant, v) => {
    enqueueSnackbar(msg, { variant });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      password: data.get("password"),
      companyData: [
        {
          name: data.get("name"),
          vat: data.get("vat"),
          address: {
            street: `${data.get("Street")} ${data.get(
              "BuildingNumber"
            )} ${data.get("LocaleNumber")}}`,
            zipCode: data.get("ZipCode"),
            city: data.get("City"),
          },
        },
      ],
      tasks: [],
      avatar: data.get("first_name"),
      phone: data.get("Phone"),
      role: "CEO",
      dateOfRegistration: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
    console.log(user);
    UserServices.register(user)
      .then(() => {
        Snackbar("Registration complete!", "success");
        history.push(routes.signin);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          Snackbar("This email already reserved!", "error");
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirm"
                  label="Confirm password "
                  type="password"
                  id="password_confirm"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="Phone"
                  label="Phone number"
                  name="Phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <CountrySelect />
                {/* <TextField
                  required
                  name="Country"
                  label="Country"
                  type="text"
                  id="Country"
                
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Company Name"
                  type="text"
                  id="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="vat"
                  label="VAT number "
                  type="number"
                  id="vat"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  // fullWidth
                  name="Street"
                  label="Street"
                  type="text"
                  id="Street"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  name="BuildingNumber"
                  label="Number"
                  type="number"
                  id="BuildingNumber"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="LocaleNumber"
                  label="/"
                  type="number"
                  id="LocaleNumber"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  name="City"
                  label="City"
                  type="text"
                  id="City"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  name="ZipCode"
                  label="Zip Code"
                  type="number"
                  id="ZipCode"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Sign Up
            </Button>

            <Button
              fullWidth
              variant="contained"
              component={Link}
              to={routes.signin}
              color="success"
            >
              Already have an account? Sign in
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
