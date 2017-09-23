import React from 'react';
import { Container} from 'semantic-ui-react';
import SearchMovie from './searchmovie';
import DisplayMovie from './displaymovie';

export default class Movie extends React.Component {
	constructor () {
		super();
		this.state = {
			movies:[],
			flag:true
		}
	}
getMovieList(movieName){
	$.ajax({
				url:'http://www.omdbapi.com/?s='+movieName,
				data:'GET',
				dataType:'json',
				success:function(data){
					if(data.Response==='False')
						alert('try something');
					else
						this.setState({movies:data.Search});
				}.bind(this),
				error:function(error){
					console.log('ajax error');
				}.bind(this)

	});

}


	render () {
		return (
			<Container>
			<SearchMovie getMovieList={this.getMovieList.bind(this)}/>
			<DisplayMovie movieList={this.state.movies} flag={this.state.flag}/>
			</Container>
		);
	}
}//end of class
