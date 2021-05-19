import React, {useState} from 'react'
import About from './About'
import Contact from './Contact'
import logo from './logo.svg';
import Home from './Home'
import Users from './users';
import CreateUser from './CreateUser'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap'
import './App.css';


function App() {
  const [name,setName] = useState("amisha")
  return (
    <div className="App">

      <Router>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"> <Link to = "/home">Home</Link> </Nav.Link>
      <Nav.Link href="#features"> <Link to = "/about">About</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to = "/contact">Contact us</Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to = "/list">User List</Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to = "/create">Create User</Link></Nav.Link>

    </Nav>
  </Navbar>
  <Switch>
          <Route path="/about">
            <About/>
          </Route>
          {/* <Route path="/users">
            <users/>
          </Route> */}
          <Route path="/create">
            <CreateUser/>
          </Route>
          <Route path="/list">
            <Users/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* <header className="App-header"> */}
        {/* <h1>Hi ami!</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        </header> */}
         {/* <About name = {name}/>
        <button onClick={()=>setName("amisha negi")}> update name</button>
        <button onClick={()=>setName("amisha negi")}> update props</button>  */}
         {/* <Contact/>
         <Home/>
          <CreateUser/> */} 
        </Router>
    </div>
  );
}

export default App;
