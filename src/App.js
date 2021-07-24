import React from 'react';
import "./App.css";
import { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Movies from './Movies';

class App extends Component{
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async() => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        console.log(movies);
        this.setState({
            movies,
            isLoading: false
        })
    }
    componentDidMount(){
        // setTimeout(function(){
        //     this.setState({
        //         isLoading:false
        //     })
        // }.bind(this), 6000);
        this.getMovies();
    }
   
    render(){
        const {isLoading, movies} = this.state;
        return(
            <section className="container">
            <div>
                {isLoading? 
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div> : 
                <div>
                    {movies.map((movie) =>(
                        <Movies
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}>
                        </Movies>
                    ))}
                </div>
                }
            </div>
            </section>
        )
    }
}

export default App;