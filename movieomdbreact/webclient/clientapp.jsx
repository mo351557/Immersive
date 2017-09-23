import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import {Home,SavedMovies,Nav} from './components/home';

ReactDOM.render(

	<Router history={hashHistory}>
		<Route path="/" component={Nav}>
		<IndexRoute component={Home} />
		<Route path="/movies" component={SavedMovies} ></Route>
		<Route path="/home" component={Home} ></Route>
	</Route>
</Router>,
  	document.getElementById('mountapp')
);
