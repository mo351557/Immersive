import Sample from './sample.jsx';
import ViewMovies from './viewmovies.jsx';
import Nav from "./nav.jsx";
//Export the component, so that by including the Folder, by default the component is exported
//ES5 export
//module.exports = Sample;

//ES6 export
//export default Sample;

//If your functional module have multiple components and more than one of them have
// to be exported, follow the object notation to export them
module.exports =  {
	Sample:Sample,
  ViewMovies:ViewMovies,
	Nav:Nav,
}
