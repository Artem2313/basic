import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './NavBar';
import AboutPage from '../pages/AboutPage';
import AddHomePage from '../pages/AddHomePage';
import AddPost from './AddPost';
import Modal from './Modal';

export default class App extends Component {
  state = {
    posts: [],
    EditModal: {},
    IsEditModalOpen: false,
  };

  // Get Post
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => this.setState({ posts: res.data }));
  }

  // Create Post

  handlePost = ({ title, body }) => {
    console.log(`Deliverd from ADdPost: `, title, body);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      })
      .then(res => {
        res.data.id = uuidv4();
        this.setState(prevState => ({ posts: [res.data, ...prevState.posts] }));
      });
  };

  openModal = () => this.setState({ IsEditModalOpen: true });

  closeModal = () => this.setState({ IsEditModalOpen: false });

  handleEdit = ({ id, title, body }) => {
    this.setState({ EditModal: { id, title, body } });
    this.openModal();
  };

  // Delete Post

  handleDeletePost = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      this.setState(prevState => ({
        posts: [...prevState.posts.filter(post => post.id !== id)],
      })),
    );
  };

  // Update Post

  handleUpdate = (id, data) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then(res => {
        this.setState(prevState => ({
          posts: prevState.posts.map(post =>
            post.id === id
              ? { ...post, title: res.title, body: res.body }
              : post,
          ),
        }));
      });
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
                  <AddHomePage
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
            />
          )}
        </div>
      </Router>
    );
  }
}
