import React from 'react';
import Post from '../component/Post';

const AddHomePage = ({ posts, onDelete, onEdit }) =>
  posts.map(post => (
    <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
  ));

export default AddHomePage;
