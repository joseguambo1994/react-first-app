import React,{useState,useEffect,useContext} from 'react'
import RadioButtonComponent from './RadioButtonComponent'
import ImageComponent from './ImageComponent'
import MyContext from './RadioButtonComponent'

const GenderImageComponent = () =>{

    const [state,setState] = useState();


    const images_gender=[
        {id:1,image_url:"https://i.ibb.co/Xs2pyyg/gender-1.jpg"},
        {id:2,image_url:"https://i.ibb.co/fQYh4T6/gender-2.jpg"}
      ];
    const genero = useContext(MyContext);
    console.log(genero);

    return (
        <>
        <RadioButtonComponent/>
        <div></div>
        <ImageComponent imagesProp={images_gender}/>
        <p>El género seleccionado es:{genero}</p>
        </>
    );
}
export default GenderImageComponent;