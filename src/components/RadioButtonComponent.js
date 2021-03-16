import React,{useState,useRef, useEffect} from 'react'
import FormControl, { setRef } from '@material-ui/core'
import FormControlLabel from '@material-ui/core'
import FormLabel from '@material-ui/core'
import FormRadio from '@material-ui/core'
import RadioGroup from '@material-ui/core'
import './RadioButtonComponent.css'
import GenderImageComponent from './GenderImageComponent'



const RadioButtonComponent = (props)=>{

    const [errorGender,setErrorGender] = useState("Incomplete");

    const selectMale = (e) =>{
        setErrorGender(null);
        props.parentCallback(e.target.value);

    }
    const selectFemale = (e) =>{
        setErrorGender(null);
        props.parentCallback(e.target.value);
    }
       
    return (
        <>
        <div id="genderRadioButton">
        <input type="radio" id="male" name="gender" value="hombre" onClick={selectMale}  />
        <label id="genderLabel"  for="male">Hombre</label>
        <input   type="radio" id="female" name="gender" value="mujer" onClick={selectFemale} />
        <label id="genderLabel" for="female">Mujer</label>
        </div>
        </>
    );
}
export default RadioButtonComponent;