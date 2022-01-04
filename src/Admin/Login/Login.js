import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './../../Admin_layouts/Header';

class Login extends React.Component {
  state = {
    email:'',
    password:'',
    validator:[],
    message:'',
    isLoggedIn: false
  }

  handleInput = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  login = async (e) => {
    e.preventDefault();
      const response = await axios.post('http://127.0.0.1:8000/api/admin/login', {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'

        },
        body: this.state
      });
    //console.log(response.data.message);
    if (response.data.status == 200) 
    {
      this.setState({isLoggedIn: true});
      window.location.href = "http://localhost:3000/admin";
      //console.log(this.state.isLoggedIn);
    }
    else if(response.data.status=='error')
    {
      this.setState({
        message: response.data.message,
      });
    }
    else
    {
      this.setState({
        validator: response.data.validator,
      });
    }
    
  }
 
    render(){
        return (

          <>
          <div className="container text-center mt-5">
            <form className="fff" onSubmit={this.login}>
              <div className="border border-success col-4 offset-4 p-1">
                <img className="mb-4 img-thumbnail rounded-circle mx-auto d-block" src="#" alt="" width="72" height="72" />
                  {this.state.message &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  }
                <div className="mb-3 form-floating text-left">
                  <input name="email" value={this.state.email} onChange={this.handleInput} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                  <span className="text-danger">{this.state.validator.email}</span>
                </div>
                <div className="mb-3 form-floating text-left">
                  
                  <input name="password" value={this.state.password} onChange={this.handleInput} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                  
                  <span className="text-danger">{this.state.validator.password}</span>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <div className="col mb-3">
                    <label>
                      <a href="#">Forgot password?</a>
                    </label>
                  </div>
                </div>
                <div className="form-floating">
                  <button className="btn btn-lg btn-primary col-12" type="submit">Sign in</button>
                </div>
                <p className="mt-3 mb-3 text-muted">&copy; You grow, we grow!</p>
              </div>
            </form>
          </div>
          </>
        );
    } 
}

export default Login;