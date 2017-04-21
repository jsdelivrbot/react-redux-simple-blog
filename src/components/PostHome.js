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
        <h3>Posts</h3>
        <ul className='list-group'>
          {
            this.props.posts.map(post =>
              <li className='list-group-item' key={ post.id }>
                <Link to={ `posts/${post.id}` }>
                  <span className="pull-xs-right">
                    { post.categories }
                  </span>
                  <stong>
                    { post.title }
                  </stong>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostHome);
