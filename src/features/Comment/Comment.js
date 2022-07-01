import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Votes from "../../components/Votes/Votes";
import { Divider } from "@mui/material";
import { useState } from "react";
import TimeAgo from "../../components/MediaCard/TimeAgo";
import "./Comment.css";

//comment.author, comment.body, comment.replies(?), comment.score

const Comment = ({ comment, reply }) => {
  const [showReplies, setShowReplies] = useState(false || reply);
  //check logic on moreComments
  const moreComments =
    comment.replies &&
    comment.replies.data !== undefined &&
    comment.replies.data.children[0].data.replies !== undefined;
  const commentStyles = {
    voteDiv: {
      display: "flex",
      flexDirection: "row",
    },
    upvote: {
      justifyContent: "flex-end",
    },
    downvote: {
      justifyContent: "flex-start",
    },
  };
  const handleClick = () => {
    setShowReplies(!showReplies);
  };

  const renderReplies = () => {
    //work on refactoring using .map method and .filter?
    //render all replies to root comment

    let moreReplies = moreComments;
    const replies = []; //store replies to comment and
    if (moreReplies) {
      for (let i = 0; i < comment.replies.data.children.length; i++) {
        moreReplies =
          comment.replies.data.children[i].data.replies !== undefined;
        if (moreReplies && i < comment.replies.data.children.length) {
          replies.push(
            <Comment
              comment={comment.replies.data.children[i].data}
              key={comment.replies.data.children[i].data.id}
              reply={true}
            />
          );
        }
      }
    }
    return replies;
  };

  const renderRepliesButton = () =>
    showReplies ? (
      <Button
        size="small"
        onClick={handleClick}
        disabled={!moreComments}
        title="view replies"
      >
        {moreComments ? "Collapse" : "No Replies"}
      </Button>
    ) : (
      <Button
        size="small"
        onClick={handleClick}
        disabled={!moreComments}
        title="view replies"
      >
        {moreComments ? "View Replies" : "No Replies"}
      </Button>
    );

  return (
    <section className="Comment">
      <Card sx={{ width: "100%", borderLeft: "1px solid black" }}>
        <section
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <CardContent sx={{ width: "90%" }}>
            <section
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {comment.author}
              </Typography>
            </section>
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                width: "95%",
                overflowWrap: "break-word",
                margin: "auto",
              }}
            >
              {comment.body}
            </Typography>
          </CardContent>
        </section>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Votes score={comment.score} styles={commentStyles} />
          <Typography variant="caption">
            <TimeAgo timestamp={comment.created_utc} />
          </Typography>
          {/* <Button size="small" onClick={handleClick} disabled={!moreComments}>
            {moreComments ? "View Replies" : "No Replies"}
          </Button> */}
          {renderRepliesButton()}
        </CardActions>
      </Card>
      <Divider />
      <section style={{ marginLeft: "5px" }}>
        {showReplies && renderReplies()}
      </section>
    </section>
  );
};

export default Comment;
