import React from "react";
import useApi from "../Components/useApi";
import Loader from "../Components/Loader";

const TV = () => {
    const topRated = useApi("tv/top_rated"); 
    const popular = useApi("tv/popular"); 
    const airingToday = useApi("tv/airing_today")
    console.log(airingToday)

    return (
    <div>{(topRated&&popular&&airingToday) ? <div>Done!</div> : <Loader /> }</div>
    )
}

export default TV