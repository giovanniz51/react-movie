import React, {useEffect, useState} from 'react';
import axios from "axios"
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import MoviesList from "./components/MoviesList";
import {MovieDetails} from "./components/MovieDetails";

function App() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMovies(){
            const res = await axios("https://api.themoviedb.org/3/movie/popular?api_key=7f24a6495f185b026416f752a117492a&language=en-US&page=1")
            setMovies(res.data.results)
        }
        getMovies()
    }, [])

    return (
        <div className="App">
            <header className={"App-header"}>
                <Link className={"app-logo"} to={"/"}>
                    <img src="/logo.png" alt=""/>
                </Link>
            </header>
            <Switch>
                <Route path={"/"} exact render={() => <MoviesList movies={movies}></MoviesList>}></Route>
                <Route path={"/:id"} component={MovieDetails}></Route>
            </Switch>
        </div>
    );
}

export default App;
