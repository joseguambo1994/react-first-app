import React,{useState} from 'react'

const PdfButtonComponent = (props)=>{
    const [pdf,setPdf] = useState("Child, pdf not sent");
    const isPdfSent = (e)=>{
        setPdf("Ya se envio");
        props.parentCallback("WTF PDF");
        
    }
    return(
        <button type="button" onClick={isPdfSent}>{pdf}</button>
    );
}
export default PdfButtonComponent;