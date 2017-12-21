import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

export default class MovieContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(URL).then((response)=>{
            console.log(response);
            this.setState({
                movies: response.data.feed.entry
            });
        });
    }

    render(){
        console.log(this.state);
        const {movies} = this.state;

        const movieList = movies.map((movie, index) =>{
            return(
                <Movie info={movie} key={index}/>
            );
        });
        return(
            <div>
                {movieList}
            </div>
        );
    }
}