import React,{useState,useRef} from 'react'
import FormControl from '@material-ui/core'
import FormControlLabel from '@material-ui/core'
import FormLabel from '@material-ui/core'
import FormRadio from '@material-ui/core'
import RadioGroup from '@material-ui/core'




const RadioButtonComponent = (props)=>{
    
    const [state,setState] = useState("mujer");
    const radioButtonMale = useRef();
    const radioButtonFemale = useRef();

    const radioHandler = (e) =>{
        if(radioButtonMale.current.checked){
            setState("hombre");
            props.parentCallback("mujer");
        }else if(radioButtonFemale.current.checked){
            props.parentCallback("hombre");
        }
    }
    
    return (
        <>
        
        <input type="radio" id="male" name="gender" value="Hombre" onChange={radioHandler} ref={radioButtonMale}/>
        <label for="male">Hombre</label><br/>
        <input type="radio" id="female" name="gender" value="Mujer"onChange={radioHandler} ref={radioButtonFemale}/>
        <label for="female">Mujer</label>
        <p>{state}</p>
        
        </>
    );
}
export default RadioButtonComponent;