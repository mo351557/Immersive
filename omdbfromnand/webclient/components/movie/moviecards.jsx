import React from 'react';
import { Card, Image, Button, TextArea} from 'semantic-ui-react';

export default class MovieCards extends React.Component {
	constructor () {
		super();
	}
	saveMovie(){
		var btnId=this.props.movies.imdbID;
		$.ajax({
			url:'/stream/add',
			type:'POST',
			dataType:'json',
			data:this.props.movies,
			success:function(data) {
			$("#"+btnId).attr("disabled", true);
			$("#"+btnId).text('SAVED');
			}.bind(this),
			error:function (data) {
			$("#"+btnId).attr("disabled", true);
			$("#"+btnId).text('Not Saved');
			}.bind(this)
		})

	}

updateMovie(){
console.log(this.textInput.ref.value);
var btnId=this.props.movies.imdbID;
if(this.state.comments)
	$.ajax({
		url:'/stream/update',
		type:'PUT',
		dataType:'json',
		data:{id:this.props.movies._id,comments:this.textInput.ref.value},
		success:function(data) {
				$("#"+btnId).css('background-color','green');
				$("#"+btnId).text('Updated');

		}.bind(this),
		error:function (data) {
		$("#"+btnId).css('background-color','orange');
		$("#"+btnId).text('Error Occured..');
		}.bind(this)
	})
	else
	{
			$("#"+btnId).css('background-color','orange');
			$("#"+btnId).text('Give Something..');
	}

}

deleteMovie(){
	$.ajax({
		url:'/stream/delete',
		type:'DELETE',
		dataType:'json',
		data:{id:this.props.movies._id},
		success:function(data) {
			this.props.getDBMovieList();
		}.bind(this),
		error:function (data) {
		$("#"+btnId).css('background-color','orange');
		$("#"+btnId).text('Not deleted');
		}.bind(this)
	})

}

	render () {
		return (
			<Card>
			<Image floated='right' size='small' src={this.props.movies.Poster} />
      <Card.Content>
        <Card.Header>
          {this.props.movies.Title}
        </Card.Header>
        <Card.Meta>
          {this.props.movies.Year}
        </Card.Meta>
				<Card.Description>
        {this.props.flag?this.props.movies.imdbID:this.props.movies.comments}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
			{this.props.flag?
			<div>
				<Button id={this.props.movies.imdbID} color='blue' onClick={this.saveMovie.bind(this)}>Save</Button>
			</div>:
			<div>
				<TextArea placeholder='comments' autoHeight ref={(input) => { this.textInput = input; }}/>
				<Button id={this.props.movies.imdbID} color='purple' onClick={this.updateMovie.bind(this)} >update</Button>
				<Button id={this.props.movies.imdbID} color='red' onClick={this.deleteMovie.bind(this)}>delete</Button>
			</div>
			}
      </Card.Content>
    </Card>

		);
	}
}//end of class
