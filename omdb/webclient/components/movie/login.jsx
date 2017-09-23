import React from 'react';
import {Container, Input, Button} from 'semantic-ui-react';
import { browserHistory, hashHistory } from 'react-router';

export default class DisplayMovie extends React.Component {
	constructor () {
		super();
	}

handleLogin(){
console.log(this.passwordInput.inputRef.value);
  $.ajax({
    url:'/login',
    type:'POST',
    dataType:'json',
    data:{username:this.userInput.inputRef.value,password:this.passwordInput.inputRef.value},
    success:function(data) {
		if(data.message==='Missing credentials'||data.message==='Incorrect username.'||data.message==='Incorrect password.')
			hashHistory.push('/');
		else
			hashHistory.push('/navbar');
    }.bind(this),
    error:function (error) {
    console.log(error);
    }.bind(this)
  })
}

	render () {
		return (
			<Container>
        <Input placeholder='UserName' ref={(input) => { this.userInput = input; }} />
        <Input placeholder='Password' type="password" ref={(input) => { this.passwordInput = input; }}/>
        <Button secondary onClick={this.handleLogin.bind(this)}>Login</Button>
			</Container>
		);
	}
}//end of class
