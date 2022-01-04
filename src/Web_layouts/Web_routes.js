import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Test from './../Admin_layouts/Test';
import Login from './../Admin/Login/Login';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

class Web_routes extends React.Component 
{
	render()
	{
		return (
            <Routes>
            	<Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/test" element={<Test />} />
            </Routes>
		);
	}
}

export default Web_routes;
