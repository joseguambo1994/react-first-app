import React from 'react'

const ImageComponent = (props)=>{
    const urlArray = props.imagesProp.map(item => 
            <img src={item.image_url} alt={item.image_url} border="0"></img>
        );

    return(
        <>
        {urlArray}
        </>
    );
}
export default ImageComponent;