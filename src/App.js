import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import Home from "./components/home";
import Login from "./components/login/loginIndex";
import Dashboard from "./components/dashboard/index";
import Profile from "./components/profile/index";
import CheckList from "./components/onboarding/checkListIndex";
import EventLocation from "./components/onboarding/eventLocatoinIndex";
import ConferenceCreate from "./components/conference/create";
import ConferenceView from "./components/conference/view";
import Purchase from "./components/dashboard/purchaseIndex";
import Settings from "./components/dashboard/settingsIndex";
import Password from "./components/profile/passwordIndex";
import Account from "./components/profile/accountIndex";
import CategoryView from "./components/category/view";
import CategoryCreate from "./components/category/create";
import Registration from "./components/login/registrationIndex";
import ConferenceClaim from "./components/conferenceClaim";
import SingIn from "./components/login/signin";
import SignInTest from "./components/login/signinTest";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route path='/signin' component={SingIn}></Route>
            <Route path='/test' component={SignInTest}></Route>
            <Route exact path='/registration' component={Registration}></Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
            <PrivateRoute exact path='/purchase' component={Purchase}></PrivateRoute>
            <PrivateRoute exact path='/settings' component={Settings}></PrivateRoute>
            <PrivateRoute exact path='/profile' component={Profile}></PrivateRoute>
            <PrivateRoute exact path='/password' component={Password}></PrivateRoute>
            <PrivateRoute exact path='/account' component={Account}></PrivateRoute>
            <PrivateRoute exact path='/category' component={CategoryView}></PrivateRoute>
            <PrivateRoute exact path='/category/add' component={CategoryCreate}></PrivateRoute>
            <PrivateRoute exact path='/claim' component={ConferenceClaim}></PrivateRoute>
            <PrivateRoute exact path='/onboarding/checklist' component={CheckList}></PrivateRoute>
            <PrivateRoute exact path='/onboarding/eventlocation' component={EventLocation}></PrivateRoute>
            <PrivateRoute exact path='/conference/add' component={ConferenceCreate}></PrivateRoute>
            <PrivateRoute exact path='/conference' component={ConferenceView}></PrivateRoute>
            
          </div>
        </Router>
       </AuthContext.Provider>
  );
}

export default App;