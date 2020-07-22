import React, {Component} from 'react';
import { login } from './../components/repository';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    login(this.state)
        .then(token => this.props.history.push('/dashboard'))
        .catch(err => document.getElementById("loginErr").innerHTML= "<div className='alert alert-danger'>" + err + "</div>");
  }

  render() {
    return (

      <>
      <HeaderSimple />
        <div className="body-wrapper-business-login body-wrapper log-in">
          <div className="access-container w-container">
            <div className="card sign-up">
              <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
              <div className="">
                <div className="">
                  <form onSubmit={this.submitLogin}>
                  
                    <div className="">
                      <label className="email-label">Username</label>
                      {/*<input type="text" value={username} onChange={event => setUsername(event.target.value)} className="user-email w-input" max={256} name="username" placeholder="Username" />*/}
                      <input
                          type="text"
                          onChange={this.handleInputChange}
                          className="user-email w-input" max={256}
                          placeholder="Username"
                      />
                    </div>
                    <div className="">
                      <label className="user-name-label">Password </label>
                      <input
                          type="password"
                          onChange={this.handleInputChange}
                          className="user-email w-input" max={256}
                          placeholder="Password"
                      />
                    </div>
                    <div>
                      <input type="submit" value="Sign Up" className="w-button"/>
                    </div>
                    <div id="loginErr"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default SignIn;