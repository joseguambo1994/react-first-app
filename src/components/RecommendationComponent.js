import React from 'react'
import './RecommendationComponent.css'

const RecommendationComponent=(props)=>{
    const recommendationList = props.recommendationsProps.map(element =>
        <li>{element.text}</li>
        );

    

    return(
        <>
        <ul>
        {recommendationList}        
        </ul>
        </>
    );
}
export default RecommendationComponent;