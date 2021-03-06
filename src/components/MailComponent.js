import React,{useState} from 'react'

const MailComponent = () => {
    
    const [state,setState] = useState(
        {firstName:"",lastName:"",email:""}
    );

    const clickHandler = (e)=>{
       
    }

    return(
     
        <form>
                
            
                
                <input type="text" name="firstName"  />
            
            
                
                <input type="text" name="lastName" />
            
                
                <input type="email" name="email" />
            <input type="submit" value="Submit" />
             </form>
 
    );
}
export default MailComponent;