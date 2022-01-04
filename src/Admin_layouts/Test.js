import React from 'react';
import {Navigate} from 'react-router-dom';
class Test extends React.Component {
    handler = () =>{
        console.log("navigate");
        window.location.href = "/admin/dashboard";
    }
    render(){
        return (
          <button onClick={this.handler}>click me</button>
        );
    } 
}

export default Test;