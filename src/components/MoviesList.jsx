import React from "react";
import Movie from "./Movie";
import styled from "styled-components";

export default function MoviesList ({movies}) {
    return (
        <MovieGrid>
            {movies.map(m => (
                <Movie key={m.id} movie={m}></Movie>
            ))}
        </MovieGrid>
    )
}

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;