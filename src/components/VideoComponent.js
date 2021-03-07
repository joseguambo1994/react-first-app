import React from 'react'

const VideoComponent = (props) =>{
    const youtubeUrlFormat = "https://www.youtube.com/embed/";
    const listVideos = props.videos.map( item =>
        <iframe width="430" height="185" src={youtubeUrlFormat+item.video_url} frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    );

    return( 
        <>
        {listVideos}
        </>);
}
export default VideoComponent