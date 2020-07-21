import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import ProfileDetails from "./profileDetails";
function Home(props){
        return(

            <div>
            <Header />
            <ProfileDetails />
            <Footer />
            </div>

        )
}
export default Home;