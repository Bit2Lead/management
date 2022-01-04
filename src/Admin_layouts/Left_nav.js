import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {Nav_items} from './Nav_items';

class Left_nav extends React.Component{
  render(){
    
    return (
        <nav id="left-nav" className="collapse show bg-primary">
          <ul className="accordion list-unstyled">

          {Nav_items.map((item, index) => {
            return (
                <li className="nav-item" key={index}>
                  <Link to={"#title_"+index} data-bs-toggle="collapse" aria-expanded="false" className="accordion-button p-2" aria-controls={"#title_"+index}>{item.title}</Link>
                  {item.sub_menu &&

                    <ul className="accordion-collapse collapse" id={"title_"+index}>
                      {item.sub_menu.map((sub_item, sub_index) => {
                        return (
                          <li className="nav-item" key={sub_index}>
                            <Link className="nav-link text-white" to="/admin/task_add">{sub_item.title}</Link>
                          </li>
                        )
                        
                      })}
                      
                    </ul>
                  }
                  
                </li>

              )
          })}
          </ul>
          
        </nav>
    );
  }
}

export default Left_nav;
