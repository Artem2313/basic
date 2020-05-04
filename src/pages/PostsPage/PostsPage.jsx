import React, { Component } from 'react';
import * as API from '../../services/API';
// import Modal from '../../component/Modal/Modal';

export default class PostsPage extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    API.fetchPosts().then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h1>PostsPage</h1>
        {/* <PostsList />
        <AddPost />
        {IsEditModalOpen && (
          <Modal
            key={EditModal.id}
            post={EditModal}
            IsEditModalOpen={IsEditModalOpen}
            onCloseModal={this.closeModal}
            onUpdatePost={this.handleUpdat}
          /> */}
      </div>
    );
  }
}
