import React from 'react';
import {Menu, Input} from 'semantic-ui-react';
import {Link, hashHistory} from 'react-router';


export default class NavBar extends React.Component {

constructor(){
	super();
	this.state = { activeItem: 'Search' }
}


 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

logout(){
		$.ajax({
			url:'/logout',
			type:'POST',
			success:function(data) {
				console.log(data);
				hashHistory.push('/');
			}.bind(this),
			error:function (error) {
			console.log(error);
			}.bind(this)
		})

}



render(){
	const { activeItem } = this.state

	return (

		<div>
        <Menu pointing>
          <Menu.Item name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick} as={Link} to="search"/>
          <Menu.Item name='Movie' active={activeItem === 'Movie'} onClick={this.handleItemClick} as={Link} to="display" />
          <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.logout.bind(this)}/>
        </Menu>
        {this.props.children}
      </div>
		)
}


}
