import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Votes from "../../components/Votes/Votes";

//comment.author, comment.body, comment.replies(?), comment.score

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <Card sx={{ width: "100%" }}>
      <section style={{ display: "flex" }}>
        <Votes score={comment.score} />
        <CardContent sx={{ width: "100%" }}>
          <section
            style={{
              display: "flex",
              justifyContent: "flex-end",
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
          <Typography variant="body2">{comment.body}</Typography>
        </CardContent>
      </section>
      <CardActions>
        <Button size="small">View Replies</Button>
      </CardActions>
    </Card>
  );
};

export default Comment;
