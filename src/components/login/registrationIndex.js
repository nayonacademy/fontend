import React from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import Registration from "./registration";
class RegistrationIndex extends React.Component{
    render(){
        return(
          <>
          <HeaderSimple />
          <Registration />
          <Footer />
          </>
        )
    }
}
export default RegistrationIndex;