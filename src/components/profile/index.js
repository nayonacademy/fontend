import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import ProfileDetails from "./profileDetails";
class Home extends React.Component{
    render(){
        return(

            <div>
            <Header />
            <ProfileDetails />
            <Footer />
            </div>

        )
    }
}
export default Home;