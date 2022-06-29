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
    <li style={{ listStyleType: "none" }} key={subreddit.id}>
      <Button sx={{ textTransform: "none" }} onClick={handleClick}>
        {subreddit.display_name_prefixed}
      </Button>
    </li>
  );
};

export default SubredditButton;
