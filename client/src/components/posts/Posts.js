import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import { Post } from "./post/Post";
import useStyle from "./style";

export const Posts = ({ setCurrendId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyle();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrendId={setCurrendId} />
        </Grid>
      ))}
    </Grid>
  );
};
