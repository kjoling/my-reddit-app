import { useState } from "react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowCircleDownTwoTone,
  ArrowCircleUpTwoTone,
} from "@mui/icons-material/";
import { Button } from "@mui/material";

import "./Votes.css";

const Votes = ({ score, styles }) => {
  const [voteValue, setVoteValue] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <ArrowCircleUpTwoTone sx={{ color: "#FF4500" }} />;
    }
    return <ArrowCircleUp sx={{ color: "#FF4500" }} />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <ArrowCircleDownTwoTone sx={{ color: "#9494FF" }} />;
    }
    return <ArrowCircleDown sx={{ color: "#9494FF" }} />;
  };
  return (
    <div className="Votes" style={styles.voteDiv}>
      <Button
        sx={{
          color: "#FF4500",
          minWidth: "0",
          padding: "0",
          margin: "6px 8px",
          borderRadius: "50%",
        }}
        onClick={() => onHandleVote(1)}
        style={styles.upvote}
        title="upvote"
      >
        {renderUpVote()}
      </Button>
      <p className="Votes-count">{score ? score + voteValue : 0 + voteValue}</p>
      <Button
        sx={{
          color: "#9494FF",
          minWidth: "0",
          padding: "0",
          margin: "6px 8px",
          borderRadius: "50%",
        }}
        onClick={() => onHandleVote(-1)}
        style={styles.downvote}
        title="downvote"
      >
        {renderDownVote()}
      </Button>
    </div>
  );
};

Votes.defaultProps = {
  styles: {},
};

export default Votes;
