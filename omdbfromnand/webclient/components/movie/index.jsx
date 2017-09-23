import Movie from './movie.jsx';
import DBMovies from './dbmovies.jsx';
import NavBar from './navbar.jsx';
import Login from './login.jsx';

//Export the component, so that by including the Folder, by default the component is exported
//ES5 export
//module.exports = Movie;

//ES6 export
//export default Movie;

//If your functional module have multiple components and more than one of them have
// to be exported, follow the object notation to export them
module.exports =  {
	Movie: Movie,
	DBMovies: DBMovies,
	NavBar: NavBar,
	Login: Login

}
