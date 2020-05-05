import React, { Component } from 'react';
import * as API from '../../services/API';
import PostsList from '../../component/PostsList/PostsList';
import AddPost from '../../component/AddPost/AddPost';
import Modal from '../../component/Modal/Modal';

export default class PostsPage extends Component {
  state = {
    posts: [],
    EditModal: {},
    IsEditModalOpen: false,
  };

  // Get Posts
  componentDidMount() {
    API.fetchPosts().then(res => {
      this.setState({ posts: res.data });
    });
  }

  // Create post

  handlePost = ({ title, body }) => {
    API.createPost({ title, body }).then(res =>
      this.setState(prevState => ({ posts: [res.data, ...prevState.posts] })),
    );
  };

  // Delete Posts

  handleDelete = id => {
    API.deletePost(id).then(
      this.setState(prevState => ({
        posts: [...prevState.posts.filter(post => post.id !== id)],
      })),
    );
  };

  // Update Post

  handleUpdate = ({ id, data }) => {
    API.updatePost({ id, data }).then(res => {
      this.setState(prevState => ({
        posts: prevState.posts.map(post =>
          post.id === id
            ? { ...post, title: res.data.title, body: res.data.body }
            : post,
        ),
      }));
    });
  };

  // OpenModal

  handleModal = () =>
    this.setState(prevState => ({
      IsEditModalOpen: !prevState.IsEditModalOpen,
    }));

  // EditMode

  handleEdit = ({ id, title, body }) => {
    this.setState({ EditModal: { id, title, body } });
    this.handleModal();
  };

  render() {
    const { posts, EditModal, IsEditModalOpen } = this.state;
    return (
      <div>
        <h1>PostsPage</h1>
        <AddPost onAddPost={this.handlePost} />
        <PostsList
          posts={posts}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
        {IsEditModalOpen && (
          <Modal
            key={EditModal.id}
            post={EditModal}
            IsEditModalOpen={IsEditModalOpen}
            onHandleModal={this.handleModal}
            onUpdatePost={this.handleUpdate}
          />
        )}
      </div>
    );
  }
}
