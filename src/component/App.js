import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './NavBar';
import AboutPage from '../pages/AboutPage';
import AddHomePage from '../pages/AddHomePage';
import AddPost from './AddPost';

export default class App extends Component {
  state = {
    posts: [],
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
    const { posts } = this.state;
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
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
