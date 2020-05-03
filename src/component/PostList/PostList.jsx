import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts, onDelete, onEdit }) =>
  posts.map(post => (
    <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
  ));

export default PostList;
