import React from 'react';
import {Card,Container} from 'semantic-ui-react';
import MovieCard from './movieCard.jsx';
export default class DisplayMovieApi extends React.Component {
	constructor () {
		super();
	}


	render () {
const movieData=this.props.movieData.map((data,index)=>{
return <MovieCard  key={index} movieList={data} dbflag={this.props.dbflag}/>;
})

    return (
<Container>
  <Card.Group>{movieData}</Card.Group>
</Container>
		);
	}
}//end of class
