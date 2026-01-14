import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_LIST_API_OPTIONS, POPULAR_MOVIE_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIE_URL, MOVIE_LIST_API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;