import React, { Component, PropTypes } from 'react';

export default class PostShow extends Component {
  render() {
    return (
      <div>
        Show page { this.props.params.id }
      </div>
    );
  }
}
