import React, {useState} from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";
const API_URL = process.env.REACT_APP_API_URL;

export default function SignIn(props){
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(API_URL+"/api/jwtauth/token/", {
      username,
      password
    }).then(result => {
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
  return(
      <>
        <div className="body-wrapper log-in">
          <div className="access-container w-container">
            <div className="card sign-up">
              <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
              <div className="">
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div className="">
                      <label className="email-label">Username</label>
                      {/*<input type="text" value={username} onChange={event => setUsername(event.target.value)} className="user-email w-input" max={256} name="username" placeholder="Username" />*/}
                      <input
                          type="text"
                          value={username}
                          onChange={e => setUserName(e.target.value)}
                          className="user-email w-input" max={256}
                          placeholder="Username"
                      />
                    </div>
                    <div className="">
                      <label className="user-name-label">Password </label>
                      <input
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="user-email w-input" max={256}
                          placeholder="Password"
                      />
                    </div>
                    <div>
                      <input type="submit" value="Sign Up" className="w-button"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
