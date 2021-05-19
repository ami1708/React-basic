import React,{useState,useEffect,Fragment} from 'react';
import {Table} from 'react-bootstrap';
function Users(){

    const [user,setUser] = useState([])


    useEffect (()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            console.warn("data",data)
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result)
            })
    })
},[])
    //     {name:"ami",age:"21"},
    //     {name:"akhil",age:"22",address:"noida"},
    //     {name:"abhi",age:"23"},
    //     {name:"bruce",age:"20"},
    //     {name:"lee",age:"14"},
    //     {name:"joker",age:"16"},
        

    // ])



    return (
        <div>
<h1> users listing is here</h1>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
      {/* {
          user.map((item,index)=><tr key = {index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
          </tr>)
      } */}
    
      
  </tbody>
</Table>
{/* {
    user.map((item,i)=>
    <div key = {i}>{item.name},{item.age}{item.address}</div>
    )
} */}
        </div>
        
    )
}

export default Users;