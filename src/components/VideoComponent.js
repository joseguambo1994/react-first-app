import React from 'react'

const VideoComponent = (recommendation) =>{
    const youtubeUrlFormat = "https://www.youtube.com/embed/";
    const listVideos = recommendation.recommendation.map( item =>
        <iframe width="280" height="158" src={youtubeUrlFormat+item.video} frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
    );

    return( 
        <>
        {listVideos}
        </>);
}
export default VideoComponent