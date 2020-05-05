import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, FlexDiv } from './PostStyles';

const Post = ({ post: { title, body, id }, onDelete, onEdit }) => (
  <Container>
    <h2>{title}</h2>
    <p>{body}</p>
    <FlexDiv>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
      <Button type="button" onClick={() => onEdit({ id, title, body })}>
        Edit
      </Button>
    </FlexDiv>
  </Container>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Post;
