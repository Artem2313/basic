import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, FlexDiv } from './PostStyles';

const Post = ({
  post: { title, body, id },
  onDelete,
  onEdit,
  onGoback,
  children,
}) => (
  <Container>
    {children}
    <h2>{title}</h2>
    <p>{body}</p>
    <FlexDiv>
      {onDelete && (
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      )}
      {onEdit && (
        <Button type="button" onClick={() => onEdit({ id, title, body })}>
          Edit
        </Button>
      )}
      {onGoback && (
        <Button type="button" onClick={() => onGoback()}>
          Go Back
        </Button>
      )}
    </FlexDiv>
  </Container>
);

Post.defaultProps = {
  onGoback: null,
  onEdit: null,
  onDelete: null,
  children: null,
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onGoback: PropTypes.func,
  children: PropTypes.node,
};

export default Post;
