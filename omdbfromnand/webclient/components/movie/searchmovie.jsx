import React from 'react';
import { Container, Input, Button} from 'semantic-ui-react'

export default class SearchMovie extends React.Component {
	constructor () {
		super();
		this.state = {
    movieName:''

		}
	}
  getMovieName(event){
  this.setState({movieName:event.target.value});
  }
	setMovieName(){
		this.props.getMovieList(this.state.movieName);
	}


	render () {
		return (
			<Container>
          <Input icon='search' placeholder='Search Movies...' onChange={this.getMovieName.bind(this)} />
          <Button positive onClick={this.setMovieName.bind(this)}>Search</Button>
			</Container>
		);
	}
}//end of class
