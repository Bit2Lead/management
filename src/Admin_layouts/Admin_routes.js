import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import Test from './Test';
import Index from './Index';
import Login from './../Admin/Login/Login';
import Task_add from './../Admin/Task/Task_add';
import Task_edit from './../Admin/Task/Task_edit';
import Task_list from './../Admin/Task/Task_list';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


class Admin_routes extends React.Component {
    
    render(){
        return (
            <>
            <Routes>
                <Route exact path="/admin/" element={<Index />} /> 
                <Route exact path="/admin/login" element={<Login />} />
                <Route exact path="/admin/test" element={<Test />} />
                <Route exact path="/admin/task_add" element={<Task_add />} />
                <Route exact path="/admin/task_edit/:id" element={<Task_edit />} />
                <Route exact path="/admin/task_list" element={<Task_list />} />
            </Routes>
            </>
        );
    }
}

export default Admin_routes;
