import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Card } from "@material-ui/core";
import { CardContent } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export const Dfeed = () => {
  return (
    <Card>
        <CardContent>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        props.children
      </Typography>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
   
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
    </CardContent>
    </Card>
  );
};
