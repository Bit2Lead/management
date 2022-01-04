import React from 'react';
import Admin_routes from './Admin_routes';

class Content extends React.Component{
  render(){
    return (

        <div id="content" className="p-2">
          <Admin_routes />
        </div>
    );
  }
}

export default Content;