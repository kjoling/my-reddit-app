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
import TimeAgo from "./TimeAgo";
import Avatar from "../../features/Avatar/Avatar";

export default function MediaCard({ post, index, onToggleComments }) {
  const [showComments, setShowComments] = useState(false);

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
          <Box sx={{ width: "auto%" }}>
            <Skeleton variant="circular" width={25} height={25} />
            <br />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
          </Box>
          <br />
          <Box sx={{ width: "auto%", marginLeft: "10%" }}>
            <Skeleton variant="circular" width={25} height={25} />
            <br />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
          </Box>
          <br />
          <Box sx={{ width: "auto%", marginLeft: "20%" }}>
            <Skeleton variant="circular" width={25} height={25} />
            <br />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
          </Box>
        </Box>
      );
    } else if (post.loadingComments === "succeeded") {
      //only return comments with content in them
      return post.comments
        .filter((comment) => comment.body !== undefined)
        .map((comment) => <Comment comment={comment} key={comment.id} />);
    }
  };

  return (
    <section style={{ width: "85%", margin: "0 auto", padding: "0" }}>
      <CardContent sx={{ padding: "10px 0" }}>
        <Avatar post={post} />
        <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
          {showComments || post.title.length < 200
            ? post.title
            : `${post.title.substring(0, 150)}...`}
        </Typography>
        <section style={{ display: "flex", justifyContent: "center" }}>
          {post.url.search(".jpg") ||
            (post.url.search(".png") !== -1 && (
              <CardMedia
                component="img"
                sx={{
                  width: "50%",
                  height: "50%",
                }}
                src={`${post.url}`}
                alt=""
              />
            ))}
        </section>
      </CardContent>
      <Divider sx={{ width: "100%", margin: "auto" }} />
      <CardActions className="MediaCard-Buttons">
        <Link underline="none" variant="body2">
          {post.author}
        </Link>
        <Typography variant="caption">
          <TimeAgo timestamp={post.created_utc} />
        </Typography>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton size="small" onClick={handleClick}>
            <ForumOutlinedIcon />{" "}
            <Typography>{shortenNumber(post.num_comments, 1)}</Typography>
          </IconButton>
        </section>
      </CardActions>
      {showComments && renderComments()}
    </section>
  );
}
