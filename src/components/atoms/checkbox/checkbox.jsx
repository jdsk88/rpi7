import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, blue,green, red,pink } from "@mui/material/colors";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  status: {
    danger: red[500],
    info: orange[500],
    complete: green[500],
    notcomplete: pink[500],
    message: blue[500],
  },
});

export const Customcbox = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked/>
    </ThemeProvider>
  );
};
