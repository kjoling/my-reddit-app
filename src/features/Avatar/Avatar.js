import { Box } from "@mui/system";
import { CardMedia, Typography } from "@mui/material";

const Avatar = ({ post }) => {
  //get subredditSlice completed, use info from here to grab avatar icon to display for posts and in Subreddit component
  const image = `https://api.adorable.io/avatars/25/${post.display_name}`;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* <CardMedia component="img" src={image} height="auto" width="auto" /> */}
      <Typography sx={{ textAlign: "start", margin: "1em" }}>
        {post.subreddit_name_prefixed}
      </Typography>
    </Box>
  );
};

export default Avatar;
