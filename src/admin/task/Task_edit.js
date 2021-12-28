import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './../../admin_layouts/Header';
import { Link, useParams} from 'react-router-dom';



function Task_edit() {
  const { id } = useParams();
  
    const [state, setState] = useState({ 
      task_name: '', 
      task_description: '',
      validator:[],
      message: ''
    });
 

  const handleInput = (e) => {
    
    setState({...state, [e.target.name] : e.target.value});
  }
  const task_update = (e) => {
    e.preventDefault();
    const response = axios.post(`http://127.0.0.1:8000/api/admin/task_update/${id}`, {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: state
      });
   // window.location.href="http://localhost:3000/admin/task_list";
  {/*  if(response.data.status === 200)
    {
      // redirect to another page.
      console.log(response.data.message);
    }else
    {
      this.setState({
        validator: response.data.validator,
      });
    } */}
    
  }

  useEffect(() => {
    console.log(id);
    axios.post(`http://127.0.0.1:8000/api/admin/task_edit/${id}`)
    .then((response) => {
      setState({
        task_name: response.data.task_name,
        task_description: response.data.task_description,

      });
    });
  }, [])
  
 
        return (

          <>
          <Header/>

          <div className="container text-center mt-5">
            <form className="fff" onSubmit={task_update}>
              <div className="border border-success col-4 offset-4 p-1">
                  {state.message &&
                    <div className="alert alert-danger" role="alert">
                      {state.message}
                    </div>
                  }
                <div className="mb-3 form-floating text-left">
                  <input name="task_name" value={state.task_name} onChange={handleInput} type="text" className="form-control" id="task_name" placeholder="Task Name" />
                  <label htmlFor="task_name">Task Name:</label>
                  <span className="text-danger"></span>
                </div>
                <div className="mb-3 form-floating text-left">
                  
                  <textarea name="task_description" value={state.task_description} onChange={handleInput} type="text" className="form-control" id="task_description"></textarea>
                  <label htmlFor="task_description">Task Description:</label>
                  <span className="text-danger"></span>
                </div>
                <div className="form-floating">
                  <button className="btn btn-lg btn-primary col-12" type="submit">Update</button>
                </div>
              </div>
            </form>
          </div> 
          </>
        );
}

export default Task_edit;