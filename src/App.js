import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import Home from "./pages/home";
import Login from "./pages/login/loginIndex";
import Dashboard from "./pages/dashboard/index";
import Profile from "./pages/profile/index";
import CheckList from "./pages/onboarding/checkListIndex";
import EventLocation from "./pages/onboarding/eventLocatoinIndex";
import ConferenceCreate from "./pages/conference/create";
import ConferenceView from "./pages/conference/view";
import Purchase from "./pages/dashboard/purchaseIndex";
import Settings from "./pages/dashboard/settingsIndex";
import Password from "./pages/profile/passwordIndex";
import Account from "./pages/profile/accountIndex";
import CategoryView from "./pages/category/view";
import CategoryCreate from "./pages/category/create";
import Registration from "./pages/login/registrationIndex";
import ConferenceClaim from "./pages/conferenceClaim";
import SingIn from "./pages/login/signin";
import SignInTest from "./pages/login/signinTest";
import { Provider } from 'react-redux';
// import store from './store';

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