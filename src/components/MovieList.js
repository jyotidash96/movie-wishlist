import React from 'react';
import AddFavMovie from './AddFavMovie';

const MovieList = (props) =>  {
const	favmoviecomp = props.favmoviecomp;

    return (
		<>
			{props.movieapp.map((movie, index) => (
				<div  className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div  onClick={()=>props.handlfavclick} className='overlay d-flex align-items-center justify-content'>
<favmoviecomp/>

					</div>
</div>
        ))
 
}
</>

);


    


};
export default MovieList;