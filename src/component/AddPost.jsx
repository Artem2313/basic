import React, { Component } from 'react';

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
    onAddPost({ title, body });
    this.setState({ title: '', body: '' });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="body"
            value={body}
            placeholder="Body"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
