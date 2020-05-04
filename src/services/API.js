import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const url = '/posts';

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = ({ title, body }) => {
  return axios.post(url, {
    title,
    body,
  });
};

export const deletePost = id => {
  return axios.delete(`${url}/${id}`);
};

export const updatePost = ({ id, data }) => {
  return axios.put(`${url}/${id}`, data);
};
