import React from 'react'
import {Container} from 'semantic-ui-react'
import SearchMovie from './searchmovie.jsx'
import DisplayMovies from './displaymovies.jsx'

export default class SavedMovies extends React.Component {

constructor(){
	super();
	this.state={
		movies:[],
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
			url: '/stream/display',
			type:'GET',
			dataType:'json',
			success: function(data)
			{
					this.setState({movies:data})
					console.log(data);
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
   	<DisplayMovies movieDetails = {this.state.movies} dbMovies={this.state.flag} getmovies={this.getMovies.bind(this)}/>
  </Container>
		)
}
}
