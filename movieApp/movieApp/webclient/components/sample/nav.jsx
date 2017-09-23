import React from 'react'
import {Menu, Input} from 'semantic-ui-react'
import {Link} from 'react-router';


export default class Nav extends React.Component {

constructor(){
	super();
	this.state = { activeItem: 'Search' }
}


 handleItemClick = (e, { name }) => this.setState({ activeItem: name })




render(){
	const { activeItem } = this.state

	return (

		<div>
        <Menu pointing>
          <Menu.Item name='Sample' active={activeItem === 'Sample'} onClick={this.handleItemClick} as={Link} to="home"/>
          <Menu.Item name='Movie' active={activeItem === 'Movie'} onClick={this.handleItemClick} as={Link} to="movies" />

          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>





		)
}


}
