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

  render() {
    const { post, IsEditModalOpen, onCloseModal } = this.props;
    return (
      <BackDropCss ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <ModalCss>
          <input type="text" value={post.title} />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button type="button" onClick={() => onCloseModal()}>
            Close Modal
          </button>
        </ModalCss>
      </BackDropCss>
    );
  }
}
