import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Link } from "@mui/material/";
import "./MediaCard.css";
import shortenNumber from "../../utils/shortenNumber";
import { useDispatch } from "react-redux";
import { startGetComments } from "../../app/redditSlice";
import { useState } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Comment from "../../features/Comment/Comment";

export default function MediaCard({ post, index, onToggleComments }) {
  const [showComments, setShowComments] = useState(false);

  //dispatch startGetComments to initiate state to store commentsStatus, set index, then useEffect to trigger fetchPostComments
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startGetComments(index));
    setShowComments(!showComments);
    onToggleComments(post.permalink);
  };

  const renderComments = () => {
    if (post.loadingComments === "failed") {
      return <div>{post.errorComments}</div>;
    } else if (post.loadingComments === "loading") {
      return (
        <Box sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      );
    } else if (post.loadingComments === "succeeded") {
      return post.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ));
    }
  };

  return (
    <section style={{ width: "85%", margin: "0 auto", padding: "0" }}>
      <CardContent sx={{ padding: "10px 0" }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
          {post.title.substring(0, 200)}...
        </Typography>
        <CardMedia component="img" height="auto" src={`${post.url}`} alt="" />
      </CardContent>
      <Divider sx={{ width: "100%", margin: "auto" }} />
      <CardActions className="MediaCard-Buttons">
        <Link underline="none" variant="body2">
          {post.author}
        </Link>
        <Typography variant="caption">TimeAgo Goes Here</Typography>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton size="small" onClick={handleClick}>
            <ForumOutlinedIcon />
          </IconButton>
          <Typography>{shortenNumber(post.num_comments, 1)}</Typography>
        </section>
      </CardActions>
      {showComments && renderComments()}
    </section>
  );
}
