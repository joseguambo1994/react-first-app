import React, {useEffect,useState} from 'react'

       
const ImageComponent = (props)=>{
    
    const imagesGender=[
        {gender:"mujer",image_url:"https://i.ibb.co/Xs2pyyg/gender-1.jpg"},
        {gender:"hombre",image_url:"https://i.ibb.co/fQYh4T6/gender-2.jpg"}
      ];

    const imagesGenderEvaluated = [];
    imagesGenderEvaluated.push(imagesGender.find(x=>x.gender === props.selectedGender));
    const urlArray = imagesGenderEvaluated.map(item => 
        <img src={item.image_url} alt={item.image_url} border="0"></img>
    );

 

    return(
        <>
        <div>{urlArray}</div>
        </>
    );
}
export default ImageComponent;