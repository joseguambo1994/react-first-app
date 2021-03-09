import React,{useState,useRef, useEffect} from 'react'

const MailComponent = () => {
    

    const [state,setState] = useState(
        {firstName:"",lastName:"",email:""}
    );
    var refValueFirstName = useRef();
    var refValueLastName = useRef();
    var refValueEmail = useRef();
    var palabra = "";

    useEffect(() => {
        console.log("Inicio de valores useEffect")
        setState({
            firstName:refValueFirstName.current.value,
            lastName:refValueLastName.current.value,
            email:refValueEmail.current.value
        });
        console.log(state.firstName);
        console.log(state.lastName);
        console.log(state.email);
        console.log("Acaban los valores useEffect")
      }, );

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

        
        fetch('http://localhost:4000/user', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
        })
        .then(response => response.json())
        .then(state => {
        console.log('Success:', state);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
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
            <button type="button" onClick={clickHandler}>Registrar </button>
                </div>        
             <p>El JSON:{JSON.stringify(state) }</p>
             <p>La palabra ingresada es:{palabra}</p>
             </form>
 
    );
}
export default MailComponent;