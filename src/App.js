import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Home from "./pages/home";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import CheckList from "./pages/onboarding/checkListIndex";
import EventLocation from "./pages/onboarding/eventLocatoinIndex";
import ConferenceCreate from "./pages/conference/create";
import ConferenceView from "./pages/conference/view";
import Purchase from "./pages/purchase/purchaseIndex";
import Settings from "./pages/dashboard/settingsIndex";
import Password from "./pages/profile/password";
import Account from "./pages/profile/profile";
import CategoryView from "./pages/category/view";
import CategoryCreate from "./pages/category/create";
import SignUp from "./pages/login/signup";
import ConferenceClaim from "./pages/conferenceClaim";
import SingIn from "./pages/login/signin";
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