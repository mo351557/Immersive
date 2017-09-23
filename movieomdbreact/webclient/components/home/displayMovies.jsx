import React from 'react'
import {Container,Card} from 'semantic-ui-react'
import MovieCardForEachMovie from './card.jsx'

export default class DisplayMovies extends React.Component {

  constructor(){
  	super();
  }

  render(){
      const MovieList = this.props.movieDetails.map((movie,index)=>{
      //  console.log(movie);
          return <MovieCardForEachMovie dbMovies={this.props.dbMovies} key={index} movies={movie}  getmovies={this.props.getmovies}/>;
  })

    return(

      <Card.Group>
        {MovieList}
      </Card.Group>

    )
  }

}
