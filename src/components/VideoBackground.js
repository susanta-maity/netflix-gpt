import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
    // const [trailerId, setTrailerId] = useState(null)
    const dispatch = useDispatch();
    const trailerVideo = useSelector(state => state?.movies?.trailerVideo);
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/1062722/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const filterData = json.results.filter(videos => videos.type === "Trailer");
        const trailer = filterData.lenth ? filterData[0] : json.results[0];
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])



    return (
        <div>
            <iframe
                // width="560"
                // height="315"
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground;
