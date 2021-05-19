import React from 'react';
//class component - its lonng
class About extends React.Component{
    constructor()

    {    super();
       

       
       }

  
        componentDidMount(){
            console.warn("props",this.props.name)
     }
         componentDidUpdate(){
            console.warn("props",this.props.name)
            console.warn()
        }

    render(){
        console.warn("render")
        return (
            <div>
                <h1> about us component</h1>
                <h2>{this.props.name}</h2>
                {/* <h1> About us page</h1>
                <h1>{this.state.name}</h1>
                <h1> {this.state.age}</h1>
                <button onClick = {()=> {this.setState({name:'amisha negi'})}}> update state </button>  */}
                </div>)
        
    }
}
export default About;
// constructor(){
    
// }

// componentDidMount(){

// }
// componentDidUpdate(){

// }
// componentWillUnmount(){

// }
