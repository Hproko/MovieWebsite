import React from 'react';

import { useState, useEffect } from 'react';

// 5c336a2f
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=5c336a2f';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return(
        <div className='app'>
            <h1>MegafilmesHD</h1>

            <div className='search'>
                <input 
                  placeholder='Nome do filme' 
                  value={searchTerm} 
                  type="text" 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img 
                  src={SearchIcon} 
                  alt="search" 
                  onClick={() => searchMovies(searchTerm)}
                />
            </div>
            
            {movies?.length > 0
            ? (
                <div className='container'>

                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            )
            : (
                <div className='empty'>
                <h2>Nenhum filme encontrado</h2>
                </div>   
            )}
        </div>
    );
}


export default App;