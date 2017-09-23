import React from 'react';
import {Container, Card} from 'semantic-ui-react';
import MovieCards from './moviecards'

export default class DisplayMovie extends React.Component {
	constructor () {
		super();
	}


	render () {
		const MovieList=this.props.movieList.map((data,index)=>{
		if(data)
			return <MovieCards key={data.imdbID+index} movies={data} getDBMovieList={this.props.getDBMovieList} flag={this.props.flag}/>
		else
			return (<Card><Card.Header>Try Something..</Card.Header></Card>);
		})
		return (
			<Container>
				<Card.Group itemsPerRow={4}>
					{MovieList}
				</Card.Group>
			</Container>
		);
	}
}//end of class
