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
import InformationCollection from "./components/onboarding/informationCollectionIndex";
import Purchase from "./components/dashboard/purchaseIndex";
import Settings from "./components/dashboard/settingsIndex";
import Password from "./components/profile/passwordIndex";
import Account from "./components/profile/accountIndex";
import Category from "./components/profile/categoryIndex";
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
            <Route exact path='/purchase' component={Purchase}></Route>
            <Route exact path='/settings' component={Settings}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/password' component={Password}></Route>
            <Route exact path='/account' component={Account}></Route>
            <Route exact path='/category' component={Category}></Route>
            <Route exact path='/claim' component={ConferenceClaim}></Route>
            <Route exact path='/onboarding/checklist' component={CheckList}></Route>
            <Route exact path='/onboarding/eventlocation' component={EventLocation}></Route>
            <Route exact path='/onboarding/information/collection' component={InformationCollection}></Route>
          </div>
        </Router>
       </AuthContext.Provider>
  );
}

export default App;