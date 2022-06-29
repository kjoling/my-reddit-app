import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedSubreddits } from "../../app/redditSlice";

const Avatar = ({ post }) => {
  const selectedSubreddit = useSelector(selectSelectedSubreddits);
  console.log(selectedSubreddit);
  //get subredditSlice completed, use info from here to grab avatar icon to display for posts and in Subreddit component
  // const image = `https://api.adorable.io/avatars/25/${post.display_name}`;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* <CardMedia
        component="img"
        src={
          subreddit.icon_img ||
          `https://api.adorable.io/avatars/25/${subreddit.display_name}`
        }
        height="auto"
        width="auto"
      /> */}
      <Typography sx={{ textAlign: "start", margin: "1em" }}>
        {selectedSubreddit === "" && post.subreddit_name_prefixed}
      </Typography>
    </Box>
  );
};

export default Avatar;
