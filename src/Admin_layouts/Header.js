import React from 'react';
import Content from './Content';
class Header extends React.Component{
  render(){
    return (
        <div id="top-nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" data-bs-toggle="collapse" aria-controls="left-nav" data-bs-target="#left-nav" role="button" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Business Management</span>
              </button>
            </div>
          </nav>

          <Content />
        </div>
    );
  }
}

export default Header;