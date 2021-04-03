
import './App.css';
import React , {useState , useEffect} from "react";
import MovieList from "./components/MovieList";
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import MovieHeader from './components/MovieHeader';
import SearchMovie from './components/SearchMovie';
import AddFavMovie from './components/AddFavMovie';

const App=() => {
 
const [movieapp , setMovie] = useState([]);
const [moviesearch , searchValue] = useState('');
const [addfav , setfav] = useState([]);






const getMovies = async (moviesearch) => {

  const url=`http://www.omdbapi.com/?s=${moviesearch}&apikey=2f2bbdc9`;
const response = await fetch(url);

const responseJson = await response.json();

if(responseJson.Search){

  setMovie(responseJson.Search);
}



};

useEffect(() => {

  getMovies(moviesearch);
},[moviesearch]);

const HandleFav= (movieapp)=>{
const newFav = [...newFav,movieapp];
  setfav(newFav);

};




  return(

    <div className="container-fluid movieapp">

      
<div className='row d-flex align-items-center mt-4 mb-4'>
  <MovieHeader heading='Movies'/>
  
  <SearchMovie moviesearch={moviesearch} searchValue={searchValue}/>
  </div>
     
      <div className= 'row'>
      <MovieList  movieapp={movieapp} handlfavclick={HandleFav} favmoviecomp={AddFavMovie} />
     

      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
  <MovieHeader heading='Favourites'/>
  <div className= 'row'>
      <MovieList  movieapp={addfav} handlfavclick={HandleFav} favmoviecomp={AddFavMovie} />
     

      </div>
  
  
  </div>
     
    </div>
  );
};

export default App;
