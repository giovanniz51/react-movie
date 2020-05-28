import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios"
import styled from "styled-components";
import {Poster} from "./Movie";
import Overdrive from "react-overdrive";
const POSTER_PATH = "http://image.tmdb.org/t/p/w154/"
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280/"

export const MovieDetails = ({match}) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const getMovie = async () => {
            const res = await axios(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=7f24a6495f185b026416f752a117492a&language=en-US`)
            setMovie(res.data)
            console.log(res)
        }

        getMovie()
    }, [])

    return (
        <MovieWrapper backdrop={BACKDROP_PATH + movie.backdrop_path}>
            <MovieInfo>
                <Overdrive id={movie.id}>
                    <Poster src={POSTER_PATH + movie.poster_path} alt=""/>
                </Overdrive>
                <div>
                    <h1>{movie.original_title}</h1>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                </div>
            </MovieInfo>
        </MovieWrapper>
    );
};

const MovieWrapper = styled.div`
    background: url(${props => props.backdrop});
    position: relative;
    padding-top: 50vh;
    background-size: cover;
`


const MovieInfo = styled.div`
    background: #fff;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`