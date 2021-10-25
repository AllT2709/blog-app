import axios from "axios";

const URL = "http://localhost:3000/posts";
//const URL = '/posts'

export const getPost = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const createPost = async (newPost) => {
  const response = await axios.post(URL, newPost);
  return response.data;
};

export const updatePost = async (id, post) => {
  const { data } = await axios.patch(`${URL}/${id}`, post);
  return data;
};

export const deletePost = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};

export const likePost = async (id) => {
  const { data } = await axios.patch(`${URL}/${id}/likePost`);
  return data;
};
