import React from 'react';
import { Card} from 'semantic-ui-react';
import DisplayMovie from './displaymovie';

export default class DBMovies extends React.Component {
	constructor () {
		super();
		this.state={
			success:'',
			flag:false,
			dbMovieList:[]
		}
	}
	componentWillMount(){
		this.getDBMovieList();
	}
	getDBMovieList(){
		$.ajax({
					url:'/stream/display',
					data:'GET',
					dataType:'json',
					success:function(data){
						this.setState({dbMovieList:data});
					}.bind(this),
					error:function(error){
						this.setState({success:error});
					}.bind(this)

		});

	}

	render () {
		return (
			<DisplayMovie movieList={this.state.dbMovieList} flag={this.state.flag} getDBMovieList={this.getDBMovieList.bind(this)}/>
		);
	}
}//end of class
