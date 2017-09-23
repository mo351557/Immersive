import React from 'react';
import {Card,Container,Image,Button,Label,TextArea} from 'semantic-ui-react';
export default class MovieCard extends React.Component {
	constructor () {
		super();
    this.state={


      img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN995aUmu2KZwT3bnmwrNmFte3v817R04hple7YteBHoYWXV8fA4tRgxA',
      message:'',
			comments:''
    }
			}
addMovie()
{
  $.ajax(
		{
      url: '/stream/add',
			type:'POST',
			dataType:'json',
			data:this.props.movieList,

			success: function(data)
			{
					this.setState({message:data.value})

			}.bind(this),

			error:function(err){

					this.setState({message:err})

			}.bind(this)

		}
	);
}

deleteMovie(){
$.ajax(
		{
			url: '/stream/delete',
			type:'DELETE',
			dataType:'json',
			data:{id:this.props.movieList._id},

			success: function(data)
			{
					this.setState({message:data.value});
			}.bind(this),

			error:function(err){

					this.setState({message:err})

			}.bind(this)

		}
	);
}
updateMovie()
{

$.ajax(

		{
			url: '/stream/update',
			type:'PUT',
			dataType:'json',
			data:{id:this.props.movieList._id,comments:this.state.comments},

			success: function(data)
			{
					this.setState({message:data.value})

			}.bind(this),

			error:function(err){

					this.setState({message:err})

			}.bind(this)

		}
	);
}

handleComment(e){
this.setState({comments:e.target.value})
}


	render() {
          return (
        <Card>
        <Card.Content>
        <Label as='a' color='green' ribbon='right'>{this.props.movieList.imdbID}</Label><br/>
          {this.props.movieList.Poster == 'N/A'?
            <div class="ui tiny images">
         <Image  floated='left'  src={this.state.img} style={{ height: '200px',width: '350px' }}/>
         </div>
         : <div class="ui tiny images">
      <Image  floated='left'  src={this.props.movieList.Poster} style={{ height: '200px',width: '350px' }}/>
      </div> }
        <Card.Header>
        {this.props.movieList.Title}
        </Card.Header>
        <Card.Description>
        Year:{this.props.movieList.Year}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
					{this.props.dbflag?
						<div>
	      		<TextArea placeholder='Comments...' autoHeight onChange={this.handleComment.bind(this)}/>
	      		<div className='ui two buttons'>

	          	<Button basic color='green' onClick={this.updateMovie.bind(this)}>Update</Button>

	          	<Button basic color='green' onClick={this.deleteMovie.bind(this)}>Delete</Button>
	       	 </div>
					 <Label>{this.state.message}</Label>
				 </div>: <div className='ui two buttons'>
					           	<Button basic color='green' onClick={this.addMovie.bind(this)}>Add to DB</Button>
					            	<Label>{this.state.message}</Label>
					         </div>
      }
        </Card.Content>
        </Card>
);
}
}//end of class
