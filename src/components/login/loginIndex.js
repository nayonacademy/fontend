import React from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import Login from "./login";
class LoginIndex extends React.Component{
    render(){
        return(
          <>
          <HeaderSimple />
          <Login />
          <Footer />
          </>
        )
    }
}
export default LoginIndex;