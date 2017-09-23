import React from 'react'
import {Container,Button} from 'semantic-ui-react'
import DisplayMovieApi from './displayMovieApi.jsx';
import SearchMovie from './searchMovie.jsx';
export default class ViewMovies extends React.Component {

constructor(){
	super();
	this.state={
movie_arr:[],
error:'',
flag:true
	}
}

componentWillMount(){

	this.getMovies();
}

getMovies(){

$.ajax(

		{
			url: '/stream/view',
			type:'GET',
			dataType:'json',
			success: function(data)
			{
					this.setState({movie_arr:data})
					//console.log(data);
			}.bind(this),
			error:function(err){

					this.setState({error:err})
			}.bind(this)

		}
	);

}

render(){

	return (
	<Container>
   	<DisplayMovieApi movieData = {this.state.movie_arr} dbflag={this.state.flag}  />
  </Container>


		)
}

}
