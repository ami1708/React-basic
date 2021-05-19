import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';

//functional component
function Contact(props){
    // const [name,setName] = useState("amisha")
    // const [age,setage] = useState("21")
    // useEffect(() => {
    //     console.warn("hello-from-hook")
        
    // })
    const [val,setval] = useState("amisha")
    const test =(e) =>
    {
        console.warn("button is clicked ad tested",e.target.value)
        setval(e.target.value)
    }
    let data = "contact us page here"

    return (
        <div>
             <h1> {data}</h1>  
            {/* <h1>Name:{name}</h1>
            <h1>Age: {age}</h1>

            <button onClick={()=>setName("amisha negi")}> update name</button>
            <button onClick = {()=>setage("31")}>update age</button> */}
{/* 

             //using jsx // */}


             {/* //using arrow function we can bind the event to the button */}
             <input type = "text" onChange= {test}/>
             <button onClick = {()=>alert(val)}>Click me</button> 
        </div>
    )
}

export default Contact;
