import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import {Sample,ViewMovies,Nav} from './components/sample';

ReactDOM.render(

	<Router history={hashHistory}>
			<Route path="/" component={Nav}>
			<IndexRoute component={Sample} />
			<Route path="/movies" component={ViewMovies} ></Route>
			<Route path="/home" component={Sample} ></Route>
		</Route>
	</Router>,
  	document.getElementById('mountapp')
);
