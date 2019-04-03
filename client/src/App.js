import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import MovieCreate from './Movies/MovieCreate';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      savedList: []
    }
  }

  postMessage = mov => {
    axios.post('http://localhost:5000/api/movies', mov)
    .then(res=> {
      console.log(res)
    })
    .catch(err=> {
      console.log(err)
    })
  }

  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  }

  render(){
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }} />
        <Route path="/add"  render={()=> <MovieCreate  postMessage={this.postMessage} />} />
      </div>
    )
  }
}
