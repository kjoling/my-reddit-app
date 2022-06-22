import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import "./MediaCard.css";

export default function MediaCard() {
  return (
    <section style={{ width: "85%", margin: "0 auto", padding: "0" }}>
      <CardContent sx={{ padding: "10px 0" }}>
        <Typography gutterBottom variant="h5" component="div">
          Post Title
        </Typography>
        <CardMedia component="img" height="140" image="" alt="" />
      </CardContent>
      <Divider sx={{ width: "100%", margin: "auto" }} />
      <CardActions className="MediaCard-Buttons">
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </section>
  );
}
