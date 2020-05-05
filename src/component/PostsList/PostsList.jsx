import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Post from '../Post/Post';

const PostList = ({ posts, onDelete, onEdit, match }) =>
  posts.map(post => (
    <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit}>
      {
        <Link to={`${match.path}/${post.id}`}>
          <h1>To The Post</h1>
        </Link>
      }
    </Post>
  ));

export default withRouter(PostList);
