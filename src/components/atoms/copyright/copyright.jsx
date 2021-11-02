import { Typography } from "@mui/material";

export const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a href="http://ister.pl/" target="_blank"  rel="noreferrer">
        iSter inc.
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
