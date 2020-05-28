import React from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154/"

export default function Movies({movie}){
    return (
        <div>
           <Link to={`/${movie.id}`}>
               <Overdrive id={movie.id}>
                    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
               </Overdrive>
           </Link>
        </div>
    )
}

Movies.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
}

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`