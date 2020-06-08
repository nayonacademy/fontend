import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../context/auth";

function SingIn(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const setAuthTokens = useAuth();

  function postLogin() {
    console.log(username, password);
    axios.post("http://localhost:8000/api/jwtauth/token/", {
      username,
      password
    }).then(result => {
      console.log(result);
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
      <>
        <div className="body-wrapper log-in">
          <div className="access-container w-container">
            <div className="card sign-up">
              <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
              <div className="">
                <div className="">
                  <form>

                    <div className="">
                      <label className="email-label">Username</label>
                      <input type="username" value={username}
                             onChange={e => {
                               setUserName(e.target.value);
                             }}
                             placeholder="email"
                             className="user-email w-input" max={256}
                      />
                    </div>
                    <div className="">
                      <label className="user-name-label">Password </label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value);
                        }}
                        placeholder="password"
                        className="user-email w-input" max={256}
                    />
                    </div>
                    <button className="w-button" onClick={postLogin}>Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default SingIn;
