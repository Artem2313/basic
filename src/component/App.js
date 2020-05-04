import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from '../pages/HomePage/HomePage';
import PostPage from '../pages/PostPage/PostPage';
import PostsPage from '../pages/PostsPage/PostsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
