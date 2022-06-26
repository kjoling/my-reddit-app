import { Paper } from "@mui/material";
import SubredditButton from "./SubredditButton";
import "./Subreddits.css";
import { useSelector } from "react-redux";
import {
  selectAllSubreddits,
  selectSubredditErrorMessage,
  selectSubredditStatus,
} from "../../app/subredditSlice";

const Subreddits = () => {
  const subreddits = useSelector(selectAllSubreddits);
  const status = useSelector(selectSubredditStatus);
  const error = useSelector(selectSubredditErrorMessage);
  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = subreddits?.map((subreddit) => (
      <SubredditButton subreddit={subreddit} key={subreddit.id} />
    ));
  } else {
    content = <p>{error}</p>;
  }
  return (
    <section className="Subreddits">
      <Paper sx={{ padding: "10px" }} elevation={3}>
        <h2>Subreddits</h2>
        {content}
      </Paper>
    </section>
  );
};

export default Subreddits;
