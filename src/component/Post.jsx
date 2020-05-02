import React from 'react';

const Post = ({ post: { title, body, id }, onDelete, onEdit }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
    <button type="button" onClick={() => onEdit({ id, title, body })}>
      Edit
    </button>
  </div>
);

export default Post;
