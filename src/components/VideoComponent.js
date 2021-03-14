import React from 'react'

const VideoComponent = (recommendation) =>{
    const youtubeUrlFormat = "https://www.youtube.com/embed/";
    const listVideos = recommendation.recommendation.map( item =>
        <iframe width="560" height="315" src={youtubeUrlFormat+recommendation.video} frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    );

    return( 
        <>
        {listVideos}
        </>);
}
export default VideoComponent