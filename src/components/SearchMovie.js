import React from 'react';

const SearchMovie = ({props ,searchValue , moviesearch} ) =>{



    const SearchHandler = (e) =>{
        searchValue(e.target.value);


    }

    return( 

        <div className='col col-sm-4'>
<input className='form-control' value={moviesearch} onChange= {SearchHandler}   placeholder='Type to search'>

</input>

        </div>

    );
};


export default SearchMovie;