import { useEffect } from "react";
import { MOVIE_LIST_API_OPTIONS, MOVIE_URL } from "../utils/constants";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <Maincontainer />
            <SecondaryContainer />
            
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