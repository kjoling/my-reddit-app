import { Paper } from "@mui/material";
import React from "react";
import MediaCard from "../../components/MediaCard/MediaCard";
import Votes from "../../components/Votes/Votes";

import "./Post.css";

const Post = () => {
  return (
    <Paper
      className="Post"
      sx={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Votes />
      <MediaCard />
    </Paper>
  );
};

export default Post;
