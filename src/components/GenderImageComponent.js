import React,{useState,useEffect,useContext} from 'react'
import RadioButtonComponent from './RadioButtonComponent'
import ImageComponent from './ImageComponent'


const GenderImageComponent = () =>{

    const [state,setState] = useState("mujer");


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