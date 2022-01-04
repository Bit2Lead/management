import React from 'react';
import axios from 'axios';
import Header from './../../Admin_layouts/Header';
import {Link} from 'react-router-dom';



class Task_list extends React.Component{

  state = {
    tasks: [],
    loading: true
  }

  task_list = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/admin/task_list');
    this.setState({tasks: res.data});
    this.setState({loading: false});
  }

  task_delete = async (id) => {
    console.log(id);
    const res = await axios.post(`http://127.0.0.1:8000/api/admin/task_delete/${id}`);
    this.task_list();
  }

  componentDidMount(){
    this.task_list();
  }

  render(){
    
    if (this.state.loading) {
        return <li>Loading</li>
      }
    return (
    <>
    <div className="container"> 
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tasks</th>
            <th scope="col">Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.tasks.map(task => (
          <tr key={task.id}>
            <th scope="row">{task.id} </th>
            <td>{task.task_name}</td>
            <td>{task.task_description}</td>
            <td>
            <Link to={`/admin/task_edit/${task.id}`} className="btn btn-success">edit</Link>
            <span className="btn btn-danger" onClick={() => this.task_delete(task.id)}>delete</span>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
    );
  }
}

export default Task_list;