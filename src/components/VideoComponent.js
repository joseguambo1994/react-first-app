import React from 'react'
import './VideoComponent.css'

const VideoComponent = (recommendation) =>{
    const youtubeUrlFormat = "https://www.youtube.com/embed/";
    const listVideos = recommendation.recommendation.map( item =>
        <iframe class="video" width="280" height="158" src={youtubeUrlFormat+item.video} frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
    );

    return( 
        <>
        <div class="video-component">
        <h1 class="video-title" >Videos recomendados</h1>
        {listVideos}
        </div>
        </>);
}
export default VideoComponent