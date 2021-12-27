import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Test from './../admin_layouts/Test';
import Login from './../admin/login/Login';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

class Web_routes extends React.Component 
{
	render()
	{
		return (
			<Router>
                <Routes>
                	<Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/test" element={<Test />} />
                </Routes>
            </Router>
		);
	}
}

export default Web_routes;
