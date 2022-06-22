import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "@mui/material/";
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
        <Link underline="none" variant="body2">
          Username
        </Link>
        <Typography variant="caption">Time Ago Posted</Typography>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <ForumOutlinedIcon />
          </IconButton>
          <Typography>#comments</Typography>
        </section>
      </CardActions>
    </section>
  );
}
