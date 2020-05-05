import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/API';
import Post from '../../component/Post/Post';

const getIdFromProps = props => props.match.params.id;

export default class PostPage extends Component {
  state = { post: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.fetchPostWithId(id).then(res => this.setState({ post: res.data }));
  }

  handleGoback = () => {
    const { history } = this.props;
    history.push(`/posts`);
  };

  render() {
    const { post } = this.state;
    return (
      <div>
        <h1>Single Page</h1>
        {post && <Post post={post} onGoback={this.handleGoback} />}
      </div>
    );
  }
}

PostPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
