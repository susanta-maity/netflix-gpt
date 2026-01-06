import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_LIST_API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(MOVIE_URL, MOVIE_LIST_API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;