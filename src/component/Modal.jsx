import React, { Component, createRef } from 'react';
import styled from 'styled-components';

const BackDropCss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalCss = styled.div`
  padding: 16px;
  max-width: 480px;
  width: 100%;
  min-height: 320px;
  background-color: #fff;
`;

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

    this.props.onCloseModal();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onCloseModal();
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
    this.props.onCloseModal();
  };

  render() {
    const { onCloseModal } = this.props;
    return (
      <BackDropCss ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <ModalCss>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <textarea
              type="text"
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button type="button" onClick={() => onCloseModal()}>
              Close Modal
            </button>
            <input type="submit" value="Submit" />
          </form>
        </ModalCss>
      </BackDropCss>
    );
  }
}
