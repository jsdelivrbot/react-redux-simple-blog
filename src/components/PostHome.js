import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router';

class PostHome extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to='/posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <div>List of blog posts.</div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostHome);
