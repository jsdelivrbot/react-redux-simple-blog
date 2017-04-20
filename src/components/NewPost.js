import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class NewPost extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit, createPost } = this.props;
    return (
      <form onSubmit={ handleSubmit(createPost) }>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" { ...title } />
          {
            title.touched && title.error ?
              <div className="text-help">
                { title.error }
              </div>
            : null
          }
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" { ...categories } />
          {
            categories.touched && categories.error ?
              <div className="text-help">
                { categories.error }
              </div>
            : null
          }
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
          <label htmlFor="">Content</label>
          <textarea className="form-control" { ...content } />
          {
            content.touched && content.error ?
              <div className="text-help">
                { content.error }
              </div>
            : null
          }
        </div>

        <button type="submit" className="btn btn-primary">submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

function validate(post) {
  const errors = {};

  if (!post.title) {
    errors.title = 'Enter a username';
  }

  if (!post.categories) {
    errors.categories = 'Enter categories';
  }

  if (!post.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(NewPost);
