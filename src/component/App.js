import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import AboutPage from '../pages/AboutPage/AboutPage';
import PostList from './PostList/PostList';
import AddPost from './AddPost/AddPost';
import Modal from './Modal/Modal';

const LOCAL = 'http://localhost:8000/posts';

export default class App extends Component {
  state = {
    posts: [],
    EditModal: {},
    IsEditModalOpen: false,
  };

  // API ========================================================================

  // Get Post
  componentDidMount() {
    axios.get(LOCAL).then(res => this.setState({ posts: res.data }));
  }

  // Create Post

  handlePost = ({ title, body }) => {
    axios
      .post(LOCAL, {
        title,
        body,
      })
      .then(res => {
        this.setState(prevState => ({ posts: [res.data, ...prevState.posts] }));
      });
  };

  // Delete Post

  handleDeletePost = id => {
    axios.delete(`${LOCAL}/${id}`).then(
      this.setState(prevState => ({
        posts: [...prevState.posts.filter(post => post.id !== id)],
      })),
    );
  };

  // Update Post

  handleUpdate = ({ id, data }) => {
    axios.put(`${LOCAL}/${id}`, data).then(res => {
      this.setState(prevState => ({
        posts: prevState.posts.map(post =>
          post.id === id
            ? { ...post, title: res.data.title, body: res.data.body }
            : post,
        ),
      }));
    });
  };

  // Handlers ===================================================

  openModal = () => this.setState({ IsEditModalOpen: true });

  closeModal = () => this.setState({ IsEditModalOpen: false });

  handleEdit = ({ id, title, body }) => {
    this.setState({ EditModal: { id, title, body } });
    this.openModal();
  };

  render() {
    const { posts, EditModal, IsEditModalOpen } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <React.Fragment>
                  <AddPost onAddPost={this.handlePost} />
                  <PostList
                    {...props}
                    posts={posts}
                    onDelete={this.handleDeletePost}
                    onEdit={this.handleEdit}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={AboutPage} />
          </Switch>
          {IsEditModalOpen && (
            <Modal
              key={EditModal.id}
              post={EditModal}
              IsEditModalOpen={IsEditModalOpen}
              onCloseModal={this.closeModal}
              onUpdatePost={this.handleUpdate}
            />
          )}
        </div>
      </Router>
    );
  }
}
