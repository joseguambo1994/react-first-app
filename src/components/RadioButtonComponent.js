import React,{useState,useRef, useEffect} from 'react'
import FormControl, { setRef } from '@material-ui/core'
import FormControlLabel from '@material-ui/core'
import FormLabel from '@material-ui/core'
import FormRadio from '@material-ui/core'
import RadioGroup from '@material-ui/core'




const RadioButtonComponent = (props)=>{
    
    const selectMale = (e) =>{
        props.parentCallback(e.target.value);
    }
    const selectFemale = (e) =>{
        props.parentCallback(e.target.value);
    }
       
    return (
        <>
        
        <input type="radio" id="male" name="gender" value="hombre" onClick={selectMale}  />
        <label for="male">Hombre</label><br/>
        <input type="radio" id="female" name="gender" value="mujer" onClick={selectFemale} />
        <label for="female">Mujer</label>
        
        </>
    );
}
export default RadioButtonComponent;