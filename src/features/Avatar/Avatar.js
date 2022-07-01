import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedSubreddits } from "../../app/redditSlice";

const Avatar = ({ post }) => {
  const selectedSubreddit = useSelector(selectSelectedSubreddits);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography sx={{ textAlign: "start", margin: "1em" }}>
        {selectedSubreddit === "" && post.subreddit_name_prefixed}
      </Typography>
    </Box>
  );
};

export default Avatar;
