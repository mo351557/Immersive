import React from 'react';
import {Input,Button,Grid} from 'semantic-ui-react';

export default class SearchMovie extends React.Component {
	constructor () {
		super();
		this.state = {
     Title:''
		}
	}
  setMovieName(e)
  {
    this.setState({Title:e.target.value});
  }

handleMovie()
{
  this.props.handleMovie(this.state.Title);
}

	render () {
		return (
      <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Input icon='search' placeholder='Search movie here...' onChange={this.setMovieName.bind(this)}/>
        </Grid.Column>
        <Grid.Column>
           <Button primary onClick={this.handleMovie.bind(this)}>Primary</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
		);
	}
}//end of class
