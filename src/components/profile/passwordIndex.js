import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import Password from "./password";
class PasswordIndex extends React.Component{
    render(){
        return(

            <div>
            <Header />
            <Password />
            <Footer />
            </div>

        )
    }
}
export default PasswordIndex;