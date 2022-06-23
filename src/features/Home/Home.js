import React from "react";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import {
  selectAllPosts,
  selectStatus,
  selectErrorMessage,
} from "../../app/redditSlice";

const Home = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectErrorMessage);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = posts?.map((post, index) => {
      return <Post key={post.id} post={post} index={index} />;
    });
  } else {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
};

export default Home;
