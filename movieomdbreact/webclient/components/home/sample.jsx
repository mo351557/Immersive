import React from 'react'
import {Button, Container} from 'semantic-ui-react'
import SearchMovie from './searchMovie.jsx'
import DisplayMovies from './displayMovies.jsx'

export default class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
          movies:[],
          error:'',
          flag:false
        }
    }

 getMovieDetails(titleOfMovie){
   $.ajax(

		{
			url: 'http://www.omdbapi.com/?s='+titleOfMovie,
			type:'GET',
			dataType:'json',
			success: function(data)
			{
					this.setState({movies:data.Search})
					// console.log(this.state.movies);
          //console.log("hi");
			}.bind(this),
			error:function(err){
					this.setState({error:err})
			}.bind(this)
		}
	);
 }

    render() {
        return (

            <Container>
                <SearchMovie titleToSearchMovie={this.getMovieDetails.bind(this)}  />
                <DisplayMovies movieDetails={this.state.movies} dbMovies={this.state.flag}/>
            </Container>
        )
    }
} //end of class
