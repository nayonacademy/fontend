import React from 'react';
class Password extends React.Component{
    render(){
        return(
            <div className="body-wrapper">
            <div className="b2b-container-onboarding">
              <div className="onboarding-progress">
                <div className="onboarding-line" />
                <div className="div-block-24">
                  <div className="onboarding-circle current" />
                  <p>password</p>
                </div>
                <div className="div-block-23">
                  <div className="onboarding-circle" />
                  <p>information</p>
                </div>
                <div className="div-block-22">
                  <div className="onboarding-circle" />
                  <p>finalize</p>
                </div>
              </div>
              <div className="w-container">
                <div className="card">
                  <div className="card-heading">
                    <h1 className="card-title">Create a secure password</h1>
                  </div>
                  <p className="paragraph password">
                    Account security is highly important to us. Create a strong
                    &amp;&nbsp;secure password to proceed to your account screen.
                  </p>
                  <div className="card password">
                    <div className="password-text">
                      You password must be at least 7 characters.
                    </div>
                    <div className="password-text">
                      You password must contain a capital letter.{" "}
                    </div>
                    <div className="password-text">
                      You password must contain a special character:&nbsp;!, @, &amp;, ^,
                      etc.{" "}
                    </div>
                    <div className="password-text">
                      You password must contain at least one number.
                    </div>
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        className="secure-password-form w-clearfix"
                      >
                        <label htmlFor="Password">Password</label>
                        <input
                          type="password"
                          className="password-field w-input"
                          maxLength={256}
                          name="Password"
                          data-name="Password"
                          placeholder="Password"
                          id="Password"
                          required
                        />
                        <label htmlFor="Password-3">Re-type your password</label>
                        <input
                          type="password"
                          className="password-field-verify w-input"
                          maxLength={256}
                          name="Password-2"
                          data-name="Password 2"
                          placeholder="Password"
                          id="Password-2"
                          required
                        />
                        <input
                          type="submit"
                          defaultValue="Submit"
                          data-wait="Please wait..."
                          className="submit-button-3 w-button"
                        />
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
              </div>
            </div>
          </div>
                
        )
    }
}
export default Password;