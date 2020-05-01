import React from 'react';

const Post = ({ post: { title, body, id }, onDelete }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </div>
);

export default Post;
