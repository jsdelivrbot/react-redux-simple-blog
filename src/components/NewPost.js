import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class NewPost extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" { ...title } />
        </div>

        <div className="form-group">
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" { ...categories } />
        </div>

        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea className="form-control" { ...content } />
        </div>

        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content']
})(NewPost);
