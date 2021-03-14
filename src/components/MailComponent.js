import React,{useState,useRef, useEffect} from 'react'

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
        firstNameValue = refValueFirstName.current.value;
        lastNameValue = refValueLastName.current.value;
        emailValue =refValueEmail.current.value;

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
        console.log("Acabo la petición POST");
                
    }

    return(
     
        <form>
                
            
                <div>
                <input type="text" name="firstName" ref={refValueFirstName} />
                </div>
            
                <div>
                <input type="text" name="lastName" ref={refValueLastName} />
                </div>
                <div>
                <input type="email" name="email" ref={refValueEmail}/>
                </div>
                <div>
            <button type="button" onClick={clickHandler}>Registrar Email y nombre </button>
                </div>        
             </form>
 
    );
}
export default MailComponent;