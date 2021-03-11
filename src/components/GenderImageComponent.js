import React,{useState,useEffect,useContext} from 'react'
import RadioButtonComponent from './RadioButtonComponent'
import ImageComponent from './ImageComponent'


const GenderImageComponent = (props) =>{

    const [state,setState] = useState("mujer");


    const callBackFunction = (childData) =>{
        setState( state => {
            state = childData;
            return state;
        } );
        props.parentCallback(state);
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