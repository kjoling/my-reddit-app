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
import { fetchPostComments, startGetComments } from "../../app/redditSlice";

export default function MediaCard({ post, index }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      // dispatch(startGetComments(index));
      dispatch(fetchPostComments({ permalink: post.permalink, index }));
    } catch (err) {
      return err.message;
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
    </section>
  );
}
