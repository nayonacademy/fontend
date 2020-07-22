import React from 'react';
function Login(props){
        return(
          <>
            <div className="body-wrapper log-in">
            <div className="access-container w-container">
              <div className="card sign-up">
                <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
                <div className="access-button-container">
                    <a href="#" className="facebook-signin-button w-button">Continue with Facebook</a><a href="#" className="linkedin-signin-button w-button">Continue with LinkedIn</a></div>
                <div className="proceed-with-email-container">
                  <a href="/registration" data-w-id="d8e8b6c1-1bc7-fd1a-37a3-9216eab18dd3" className="continue-with-email-instead">Registration with email</a>
                    <a href="/signin" data-w-id="d8e8b6c1-1bc7-fd1a-37a3-9216eab18dd3" className="continue-with-email-instead">SignIn with email</a>
                </div>
                <div className="data-collection">
                  <div className="data-form w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" style={{opacity: 0}} className="user-email-container">
                      <div className="email-container-half">
                          <label className="email-label">Email Address</label>
                          <input type="email" className="user-email w-input" max={256} name="email" data-name="Email" placeholder="" data-w-id="f6643469-9bb1-ac8d-0e39-2ba5d61bbe79" id="email" /></div>
                      <div className="name-container-half">
                          <label className="user-name-label">Name (public)</label>
                          <input type="text" className="user-public-name w-input" max={256} name="name" data-name="name" placeholder="Name" data-w-id="8ab9ea52-227f-e6c1-8d5d-f3c6a0b79694" id="name" />
                          <label className="w-checkbox checkbox-field">
                              <input type="checkbox" id="agree" name="agree" data-name="agree" data-w-id="c1c8468c-7de9-d995-55fa-48936b22aa22" className="w-checkbox-input"/><span className="w-form-label">I agree to the <a href="#">terms</a> and <a href="#">conditions.</a></span></label></div>
                      <div className="terms-and-conditions-span"><a data-w-id="bef1e97d-8483-6ee3-d934-fb48f02be0bf" href="#" className="user-sign-up-button w-button">Sign up</a></div>
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
                  <h1 className="heading login biz sub">Boost SEO, engage with customers, and promote your conference.</h1><a href="/claim" className="conference-sign-up-button w-button">Add your conference to our list</a></div>
              </div>
            </div>
          </div>
          </>
        )
}
export default Login;