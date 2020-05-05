import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  BackDropCss,
  ModalCss,
  Form,
  Title,
  Body,
  FlexDiv,
  Button,
  Submit,
} from './ModalStyles';

export default class Modal extends Component {
  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    body: this.props.post.body,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onHandleModal();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onHandleModal();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onUpdatePost } = this.props;
    const { title, body, id } = this.state;
    const data = { title, body };
    onUpdatePost({ id, data });
    this.setState({ title: '', body: '' });
    this.props.onHandleModal();
  };

  render() {
    const { onHandleModal } = this.props;
    const { title, body } = this.state;
    return (
      <BackDropCss ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <ModalCss>
          <Form onSubmit={this.handleSubmit}>
            <Title
              type="text"
              name="title"
              onChange={this.handleChange}
              value={title}
            />
            <Body
              type="text"
              name="body"
              onChange={this.handleChange}
              value={body}
              rows="10"
            />
            <FlexDiv>
              <Submit type="submit" value="Submit" />
            </FlexDiv>
          </Form>
          <Button type="button" onClick={() => onHandleModal()}>
            Close
          </Button>
        </ModalCss>
      </BackDropCss>
    );
  }
}

Modal.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onHandleModal: PropTypes.func.isRequired,
  onUpdatePost: PropTypes.func.isRequired,
};
