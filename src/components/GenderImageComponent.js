import React,{useState,useEffect,useContext} from 'react'
import RadioButtonComponent from './RadioButtonComponent'
import ImageComponent from './ImageComponent'
import MyContext from './RadioButtonComponent'

const GenderImageComponent = () =>{

    const [state,setState] = useState("mujer");


    
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
          </>
    );
}
export default GenderImageComponent;