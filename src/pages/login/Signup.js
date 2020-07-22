import React from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import { register } from '../../components/repository';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', password2: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitRegistration =this.submitRegistration.bind(this);
  }

  handleInputChange(event) {
      this.setState({[event.target.name]: event.target.value})
  }

  submitRegistration(event){
      event.preventDefault();
      register(this.state)
          .then(token => window.location = '/dashboard')
          .catch(err => document.getElementById("RegErr").innerHTML= "<div className='alert alert-danger'>" + err + "</div>");
  }
// POST data
  render() {
    return (
      <>
      <HeaderSimple />
      <div className="body-wrapper log-in">
      <div className="access-container w-container">
        <div className="card sign-up">
          <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
          <div className="">
            <div className="">

              <form onSubmit={this.submitRegistration}>
                <div className="">
                    <label className="email-label">Username</label>
                    <input type="text" className="user-email w-input" name="name" onChange={this.handleInputChange} placeholder="Username"/>
                </div>
                <div className="">
                  <label className="email-label">Email</label>
                  <input type="email" className="user-email w-input" name="email" onChange={this.handleInputChange} placeholder="Email"/>
                </div>
                <div className="">
                    <label className="user-name-label">Password </label>
                    <input type="password" className="user-public-name w-input" name="password" onChange={this.handleInputChange} placeholder="Password"/>
                </div>
                <div className="">
                  <label className="email-label">Retype Password</label>
                  <input type="password" className="user-public-name w-input" name="password2" onChange={this.handleInputChange} placeholder="Retype Password"/>
                </div>
                <div>
                  <button type="submit" className="w-button btn btn-primary shadow-2 mb-4">Sign up</button>
                </div>
              </form>

              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="data-verification-verify-form">
            <div className="data-form w-form">
              <form id="email-form" name="email-form" data-name="Email Form" className="verify-account-form">
                  <label className="unique-code-text">Enter the unique code we just sent to your email</label>
                  <input type="email" className="user-email w-input" max={256} name="email-3" data-name="Email 3" placeholder="" id="email-3" />
                  <div className="terms-and-conditions-span"><a href="#" className="user-required-email-button w-button">Continue</a></div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card biz-submit-conference">
          <h1 className="heading login biz">Are you in charge of a conference?</h1>
          <div className="access-button-container sub">
            <h1 className="heading login biz sub">Boost SEO, engage with customers, and promote your conference.</h1><a href="component/conference-claim.html" className="conference-sign-up-button w-button">Add your conference to our list</a></div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    );
  }
}

export default SignUp;