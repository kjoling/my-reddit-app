import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Votes from "../../components/Votes/Votes";
import { Divider } from "@mui/material";
import { useState } from "react";

//comment.author, comment.body, comment.replies(?), comment.score

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  // console.log(comment);
  const moreComments =
    comment.replies.data !== undefined &&
    comment.replies.data.children[0].data?.replies !== undefined;
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
    const replies = []; //store replies to comment and
    for (let i = 0; i < comment.replies.data.children.length; i++) {
      if (moreComments && i < comment.replies.data.children.length - 1) {
        replies.push(
          <Comment
            comment={comment.replies.data.children[i].data}
            key={comment.replies.data.children[i].data.id}
          />
        );
      }
    }
    return replies;
  };
  const renderRepliesButton = () =>
    showReplies ? (
      <Button size="small" onClick={handleClick} disabled={!moreComments}>
        {moreComments ? "Collapse" : "No Replies"}
      </Button>
    ) : (
      <Button size="small" onClick={handleClick} disabled={!moreComments}>
        {moreComments ? "View Replies" : "No Replies"}
      </Button>
    );
  return (
    <>
      <Card sx={{ width: "100%" }}>
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
          <Typography variant="caption">TimeAgo goes Here</Typography>
          {/* <Button size="small" onClick={handleClick} disabled={!moreComments}>
            {moreComments ? "View Replies" : "No Replies"}
          </Button> */}
          {renderRepliesButton()}
        </CardActions>
      </Card>
      <Divider />
      <section style={{ marginLeft: "20px" }}>
        {showReplies && renderReplies()}
      </section>
    </>
  );
};

export default Comment;
