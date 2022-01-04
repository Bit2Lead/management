import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Admin_layouts/Header';
import Left_nav from './Admin_layouts/Left_nav';
import './style.css';
class App extends React.Component{
  render(){
    return (
      <>
      <div className="wrapper">
        <Left_nav />
          <Header />
      </div>
      
      </>
    );
  }
}

export default App;
