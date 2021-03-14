import React from 'react'

const RecommendationComponent=(props)=>{
    const recommendationList = props.recommendationsProps.map(element =>
        <li>{element.text}</li>
        );

    

    return(
        <>
        <h1>Lista de recomendaciones</h1>
        <ul>
        {recommendationList}        
        </ul>
        </>
    );
}
export default RecommendationComponent;