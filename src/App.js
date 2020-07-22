import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import CheckList from "./pages/onboarding/CheckListIndex";
import EventLocation from "./pages/onboarding/EventLocatoinIndex";
import ConferenceCreate from "./pages/conference/Create";
import ConferenceView from "./pages/conference/View";
import Purchase from "./pages/purchase/PurchaseIndex";
import Settings from "./pages/dashboard/SettingsIndex";
import Password from "./pages/profile/Password";
import Account from "./pages/profile/Profile";
import CategoryView from "./pages/category/View";
import CategoryCreate from "./pages/category/Create";
import SignUp from "./pages/login/Signup";
import ConferenceClaim from "./pages/ConferenceClaim";
import SingIn from "./pages/login/Signin";
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
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route exact path='/purchase' component={Purchase}></Route>
            <Route exact path='/settings' component={Settings}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/password' component={Password}></Route>
            <Route exact path='/account' component={Account}></Route>
            <Route exact path='/category' component={CategoryView}></Route>
            <Route exact path='/category/add' component={CategoryCreate}></Route>
            <Route exact path='/claim' component={ConferenceClaim}></Route>
            <Route exact path='/onboarding/checklist' component={CheckList}></Route>
            <Route exact path='/onboarding/eventlocation' component={EventLocation}></Route>
            <Route exact path='/conference/add' component={ConferenceCreate}></Route>
            <Route exact path='/conference' component={ConferenceView}></Route>
          </div>
        </Router>
       </AuthContext.Provider>
  );
}

export default App;