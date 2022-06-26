import React from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  selectStatus,
  selectErrorMessage,
} from "../../app/redditSlice";
import { fetchPostComments } from "../../app/redditSlice";
import { Skeleton } from "@mui/material";

const Home = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  //need to review
  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchPostComments({ permalink, index }));
    };
    return getComments;
  };

  let content;
  if (status === "loading") {
    content = (
      <>
        <p>Loading...</p>
        <section
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          {/* <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} /> */}
          <Skeleton variant="circular" width={50} height={50} />
          <br />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <br />
          <Skeleton variant="circular" width={50} height={50} />
          <br />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <br />
          <Skeleton variant="circular" width={50} height={50} />
          <br />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </section>
      </>
    );
  } else if (status === "succeeded") {
    content = posts?.map((post, index) => {
      return (
        <Post
          key={post.id}
          post={post}
          index={index}
          onToggleComments={onToggleComments(index)}
        />
      );
    });
  } else {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
};

export default Home;
