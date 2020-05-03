import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Title, Body, Label, Submit } from './AddPostStyles';

export default class AddPost extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onAddPost } = this.props;
    const { title, body } = this.state;
    if (title !== '' && body !== '') {
      onAddPost({ title, body });
      this.setState({ title: '', body: '' });
    }
  };

  render() {
    const { title, body } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label>Title</Label>
          <Title
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <Label>Post</Label>
          <Body
            type="text"
            name="body"
            value={body}
            placeholder="Body"
            onChange={this.handleChange}
            rows="8"
          />
          <Submit type="submit" value="Submit" />
        </Form>
      </Container>
    );
  }
}

AddPost.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};
