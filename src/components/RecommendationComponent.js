import React from 'react'
import './RecommendationComponent.css'

const RecommendationComponent=(props)=>{
    const recommendationList = props.recommendationsProps.map(element =>
        <li>{element.text}</li>
        );

    

    return(
        <>
          <h1 class="recommendation-title">Recomendaciones de entrenamiento</h1>
        <ul>
        {recommendationList}        
        </ul>
        </>
    );
}
export default RecommendationComponent;