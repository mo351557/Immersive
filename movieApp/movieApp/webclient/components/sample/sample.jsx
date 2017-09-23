import React from 'react';
import {Container} from 'semantic-ui-react';
import DisplayMovieApi from './displayMovieApi.jsx';
import SearchMovie from './searchMovie.jsx';
export default class Sample extends React.Component {
	constructor () {
		super();
		this.state = {
				movie_arr:[],
				error:'',
				flag:false
		}
	}
getMovies(title)
{
	$.ajax(
		{
			url: 'http://www.omdbapi.com/?s='+title,
			type:'GET',
			dataType:'json',
			success: function(data)
			{
					this.setState({movie_arr:data.Search})
					//console.log(this.state.movie_arr);
			}.bind(this),
			error:function(err){

					this.setState({error:err})
			}.bind(this)

		}
	);
}

	render () {
		return (
			<Container>
			<SearchMovie handleMovie={this.getMovies.bind(this)}/>
			<DisplayMovieApi movieData={this.state.movie_arr} dbflag={this.state.flag}/>
			</Container>
		);
	}
}//end of class
