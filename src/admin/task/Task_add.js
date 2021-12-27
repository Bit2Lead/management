import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './../../admin_layouts/Header';

class Task_add extends React.Component {
  state = {
    task_name:'',
    task_description:'',
    validator:[],
    message: ''
  }

  handleInput = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  task_add = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/api/admin/task_add', {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: this.state
      });
    if(response.data.status == 200)
    {
      // redirect to another page.
      console.log(response.data.message);
    }else
    {
      this.setState({
        validator: response.data.validator,
      });
    }
    
  }
 
    render(){
        return (

          <>
          <Header/>
          <div className="container text-center mt-5">
            <form className="fff" onSubmit={this.task_add}>
              <div className="border border-success col-4 offset-4 p-1">
                  {this.state.message &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  }
                <div className="mb-3 form-floating text-left">
                  <input name="task_name" value={this.state.task_name} onChange={this.handleInput} type="text" className="form-control" id="task_name" placeholder="Task Name" />
                  <label htmlFor="task_name">Task Name:</label>
                  <span className="text-danger">{this.state.validator.task_name}</span>
                </div>
                <div className="mb-3 form-floating text-left">
                  
                  <textarea name="task_description" value={this.state.task_description} onChange={this.handleInput} type="text" className="form-control" id="task_description"></textarea>
                  <label htmlFor="task_description">Task Description:</label>
                  <span className="text-danger">{this.state.validator.task_description}</span>
                </div>
                <div className="form-floating">
                  <button className="btn btn-lg btn-primary col-12" type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>
          </>
        );
    } 
}

export default Task_add;