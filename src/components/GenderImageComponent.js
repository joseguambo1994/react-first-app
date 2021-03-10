import React,{useState,useEffect,useContext} from 'react'
import RadioButtonComponent from './RadioButtonComponent'
import ImageComponent from './ImageComponent'
import MyContext from './RadioButtonComponent'

const GenderImageComponent = () =>{

    const [state,setState] = useState("mujer");


    const images_gender=[
        {id:1,image_url:"https://i.ibb.co/Xs2pyyg/gender-1.jpg"},
        {id:2,image_url:"https://i.ibb.co/fQYh4T6/gender-2.jpg"}
      ];
  /*   const genero = useContext(MyContext);
    console.log(genero); */

    const callBackFunction = (childData) =>{
        setState(childData);
    }
   
    return (
        <>
        <RadioButtonComponent parentCallback={callBackFunction} />
        <div></div>
        <ImageComponent selectedGender={state}/>
        <p>Género seleccionado desde hijo: {state}</p>
          </>
    );
}
export default GenderImageComponent;