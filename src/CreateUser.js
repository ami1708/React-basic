import React,{useState} from 'react'
function CreateUser(){

    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[address,setAddress] = useState("");
    function makeUser(){
        let data = {name,age ,address}
        console.warn("called",data)
        
    }
    return(



        <div>
            <h1> Make a new User</h1>
            Name<input type = "text" onChange = {(e) => setName(e.target.value)}    name = "username" value = {name}/>
            <br></br>
            AGE<input type = "text" onChange = {(e) => setAge(e.target.value)}  name = "age" value = {age}/>
            <br>
            </br>
            Address<input type = "text" onChange = {(e) => setAddress(e.target.value)}  name = "address" value = {address}/>
            <br></br>
            <button onClick = {makeUser}>click here</button>

        
          
        </div>
    )
}

export default CreateUser;
