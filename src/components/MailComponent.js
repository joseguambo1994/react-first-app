import React,{useState,useRef, useEffect} from 'react'
import './MailComponent.css'
const MailComponent = (props) => {
    

    const [state,setState] = useState(
        {firstName:"",lastName:"",email:""}
    );

    var refValueFirstName = useRef();
    var refValueLastName = useRef();
    var refValueEmail = useRef();
    var firstNameValue="";
    var lastNameValue="";
    var emailValue="";

    const clickHandler = (e)=>{

        e.preventDefault();
        firstNameValue = refValueFirstName.current.value;
        lastNameValue = refValueLastName.current.value;
        emailValue =refValueEmail.current.value;

        if(firstNameValue== null || firstNameValue ==""){
            alert("Ingrese su nombre")
            return false;
        }else if(lastNameValue== null || lastNameValue ==""){
            alert("Ingrese su apellido")
            return false;
        }else if(emailValue== null || emailValue ==""){
            alert("Ingrese su email")
            return false;
        }

        props.parentCallback([
            firstNameValue,
            lastNameValue,
            emailValue
                ]); 
      setState((state)=>{{
            state.firstName = firstNameValue;
            state.lastName = lastNameValue;
            state.email = emailValue;
            return state;
        }}
        );
        console.log("Mail Component, Post finished");
                
    }

    return(
     
        <form>
                
            
                <div>
                <input class="grid-item mail input" type="text" name="firstName" ref={refValueFirstName} />
                </div>
            
                <div>
                <input class="grid-item mail input" type="text" name="lastName"  ref={refValueLastName} />
                </div>
                <div>
                <input class="grid-item mail input" type="email" name="email"  ref={refValueEmail}/>
                </div>
                <button id="RegisterButton" onClick={clickHandler}>Registrar Email</button>
             
             </form>
 
    );
}
export default MailComponent;