import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
import Home from './Home';
import Login from './../admin/login/Login';
import Task_add from './../admin/task/Task_add';
import Task_edit from './../admin/task/Task_edit';
import Task_list from './../admin/task/Task_list';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


class Admin_routes extends React.Component {
    
    render(){
        return (
            <Router>
                <>
                <Routes>
                    <Route exact path="/admin" element={<Home />} />
                    <Route exact path="/admin/login" element={<Login />} />
                    <Route exact path="/admin/test" element={<Test />} />
                    <Route exact path="/admin/task_add" element={<Task_add />} />
                    <Route exact path="/admin/task_edit/:id" element={<Task_edit />} />
                    <Route exact path="/admin/task_list" element={<Task_list />} />
                </Routes>
                </>
            </Router>
        );
    }
}

export default Admin_routes;
