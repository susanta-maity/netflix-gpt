import { useEffect } from "react";
import { MOVIE_LIST_API_OPTIONS, MOVIE_URL } from "../utils/constants";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearch /> :
                <>
                    <Maincontainer />
                    <SecondaryContainer />
                </>
            }

            {/* 
            
                MainContainer
                    - VideoBackground
                    - VideoTitle
                SecondaryContainer
                    - MovieList * n
                        - cards * n

            */}
        </div>
    );
}

export default Browse;