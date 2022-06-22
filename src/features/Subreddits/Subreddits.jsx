import { Paper } from "@mui/material";
import SubredditButton from "./SubredditButton";
import "./Subreddits.css";

const Subreddits = () => {
  return (
    <section className="Subreddits">
      <Paper sx={{ padding: "10px" }}>
        <h2>Subreddits</h2>
        <SubredditButton />
      </Paper>
    </section>
  );
};

export default Subreddits;
