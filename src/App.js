import React from 'react';
import ReactDOM from 'react-dom';
import Web_routes from './web_layouts/Web_routes';
import Admin_routes from './admin_layouts/Admin_routes';

class App extends React.Component{
  render(){
    return (
      <>
        <Admin_routes />
        <Web_routes />
      </>
    );
  }
}

export default App;
