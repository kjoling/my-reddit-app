import { Paper } from "@mui/material";
import React from "react";
import MediaCard from "../../components/MediaCard/MediaCard";
import "./Post.css";

const Post = () => {
  return (
    <Paper className="Post">
      <MediaCard />
    </Paper>
  );
};

export default Post;
