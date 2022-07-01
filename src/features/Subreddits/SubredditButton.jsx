import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  fetchSubredditPosts,
  setSelectedSubreddit,
} from "../../app/redditSlice";

const SubredditButton = ({ subreddit }) => {
  // console.log(subreddit);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedSubreddit(subreddit.url));
    dispatch(fetchSubredditPosts(subreddit.display_name_prefixed));
  };

  return (
    <li style={{ listStyleType: "none", display: "flex" }} key={subreddit.id}>
      <Button
        sx={{ textTransform: "none", borderRadius: "15px", padding: 0 }}
        onClick={handleClick}
      >
        <img
          src={
            subreddit.icon_img ||
            `https://api.adorable.io/avatars/25/${subreddit.display_name}`
          }
          alt={`${subreddit.display_name}`}
          style={{
            border: `3px solid ${subreddit.primary_color}`,
            borderRadius: "50%",
            height: "2rem",
            margin: ".5rem",
          }}
        />
        {subreddit.display_name_prefixed}
      </Button>
    </li>
  );
};

export default SubredditButton;
