import React from 'react';
import {Button, Input} from 'semantic-ui-react';
export default class SearchMovie extends React.Component{
constructor(){
  super();
  this.state={
    title:''
  }
}
setTitle(event){
    this.setState({title:event.target.value});

}

sendingTitle(event){

  this.props.titleToSearchMovie(this.state.title);
}

render(){
  return(
  <div>
  <Input placeholder='Search movies by title..' onChange={this.setTitle.bind(this)}/>
  <Button primary onClick={this.sendingTitle.bind(this)}>Search</Button>
</div>
)
}
}
