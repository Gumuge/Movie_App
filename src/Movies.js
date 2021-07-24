import React from 'react';
import PropTypes from 'prop-types';
import "./Movies.css";

function Movies(props){
    return(
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{props.title}</h3>
                <h3 className="movie_year">{props.year}</h3>
                <ul className="movie_genres">
                {props.genres.map((item, index) => (
                    <li className="genres_genre" key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <p className="movie_summary">{props.summary}</p>
        </div>
    )
}

Movies.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;
