import React from 'react';
import Post from '../component/Post';

const AddHomePage = ({ posts, onDelete }) =>
  posts.map(post => <Post key={post.id} post={post} onDelete={onDelete} />);

export default AddHomePage;
