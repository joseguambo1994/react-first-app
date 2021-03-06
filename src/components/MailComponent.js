import React,{useState,useRef} from 'react'

const MailComponent = () => {
    

    const [state,setState] = useState(
        {firstName:"",lastName:"",email:""}
    );
    var refValueFirstName = useRef();
    var refValueLastName = useRef();
    var refValueEmail = useRef();
    var palabra = "";
    const clickHandler = (e)=>{
        //e.preventDefault();
        setState({
            firstName:refValueFirstName.current.value,
            lastName:refValueLastName.current.value,
            email:refValueEmail.current.value
        });
        console.log(refValueFirstName.current.value);
        console.log(refValueLastName.current.value);
        console.log(refValueEmail.current.value);
        
    }

    return(
     
        <form>
                
            
                
                <input type="text" name="firstName" ref={refValueFirstName} />
            
            
                
                <input type="text" name="lastName" ref={refValueLastName} />
            
                
                <input type="email" name="email" ref={refValueEmail}/>
            <button type="button" onClick={clickHandler}>Registrar </button>
             <p>El JSON:{JSON.stringify(state) }</p>
             <p>La palabra ingresada es:{palabra}</p>
             </form>
 
    );
}
export default MailComponent;