import React from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import Login from "./login";
function LoginIndex(props){
        return(
          <>
          <HeaderSimple />
          <Login />
          <Footer />
          </>
        )
}
export default LoginIndex;