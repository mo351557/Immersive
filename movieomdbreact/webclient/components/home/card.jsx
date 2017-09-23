import React from 'react'
import {Card,Image,Button,Label,TextArea} from 'semantic-ui-react'

export default class MovieCardForEachMovie extends React.Component{
  constructor(){
    super();

    this.state={
    message:'',
    comments:''
    }
  }

    addFavMovie(e){

      $.ajax(

      		{
      			url: '/stream/add',
      			type:'POST',
      			dataType:'json',
            data:this.props.movies,
      			success: function(data)
      			{
      					this.setState({message:data.success})
                // console.log(this.state.message);

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
			data:{id:this.props.movies._id},

			success: function(data)
			{
					this.setState({message:data.success})
          this.props.getmovies();

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
			data:{id:this.props.movies._id,comments:this.state.comments},

			success: function(data)
			{
					this.setState({message:data.success})

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
    render(){
      return(
        <Card>
          <Image src={this.props.movies.Poster} />
    <Card.Content>
      <Card.Header>
        {this.props.movies.Title}
      </Card.Header>
      <Card.Meta>
            {this.props.movies.Year}
      </Card.Meta>
      <Card.Description>
        {this.props.dbMovies?this.props.movies.comments:this.props.movies.imdbID}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {this.props.dbMovies?

            	<div>

      	      		<TextArea placeholder='Comments...' autoHeight onChange={this.handleComment.bind(this)}/>
      	      		<div className='ui two buttons'>

      	          	<Button basic color='green' onClick={this.updateMovie.bind(this)}>Update</Button>

      	          	<Button basic color='green' onClick={this.deleteMovie.bind(this)}>Delete</Button>
      	          		<Label>{this.state.message}</Label>

      	       	 </div>
            	</div>


              :<div className='ui two buttons'>
                	<Button basic color='green' onClick={this.addFavMovie.bind(this)}>Add to DB</Button>
                 	<Label>{this.state.message}</Label>
              </div>

            }
        {/* <Button primary onClick={this.addFavMovie.bind(this)}>Add as fav</Button>
        {/* <Label>{this.state.message}</Label> */}
    </Card.Content>
  </Card>

      )

    }
}
