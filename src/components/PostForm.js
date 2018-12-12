import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost} from "../actions/postActions";
import PropTypes from 'prop-types';

class PostForm extends  Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = event =>{
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post)
  };
  render(){

    return(
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title: </label> <br />
            <input onChange={this.handleChange} name="title" type="text"/><br />
          </div>
          <div>
            <label> Body: </label> <br />
            <textarea onChange={this.handleChange} name="body"/><br />
          </div>
            <button type="submit">Submit</button>
          </form>
      </div>

    )
  }

}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);