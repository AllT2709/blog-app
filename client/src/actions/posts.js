import * as api from "../services/post.services";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE_POST,
  UPDATE,
} from "../constants/actionsTypes";

//Creating actions
export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.getPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const data = await api.createPost(newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const data = await api.updatePost(id, post);
      dispatch({
        type: UPDATE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);
      dispatch({
        type: DELETE,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const likePost = (id) => async (dispatch) => {
  try {
    const data = await api.likePost(id);
    dispatch({
      type: LIKE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
