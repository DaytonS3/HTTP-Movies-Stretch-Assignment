import React, { Component } from 'react';
import '../index.css'




export default class MovieCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovie: {
        title: '',
        director: '',
        metascore: '',
        stars: []
      }
      
    };
  }

  handleChange = e => {
      this.setState({
          addMovie: {
              ...this.state.addMovie,
              [e.target.name]: e.target.value
          }
      })
  }


  postMessage = e => {
      e.preventDefault();
      this.props.postMessage(this.state.addMovie);
  }

  render() {
      console.log(this.state)
    return (
      <div className="movie-create">
       <h2>Add a new movie</h2>
       <form onSubmit={this.postMessage}>
           <input 
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
              value={this.state.addMovie.title}
           />
           <input 
              type="text"
              name="director"
              placeholder="Director"
              onChange={this.handleChange}
              value={this.state.addMovie.director}
           />
           <input 
              type="text"
              name="metascore"
              placeholder="Metascore"
              onChange={this.handleChange}
              value={this.state.addMovie.metascore}
           />
           <input 
              type="text"
              name="Stars"
              placeholder="Stars"
              onChange={this.handleChange}
              value={this.state.addMovie.star}
           />
           <button type="submit">Submit</button>
       </form>
      </div>
    );
  }
}
