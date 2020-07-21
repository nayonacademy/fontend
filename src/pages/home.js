import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Conferences from "./conferenses";
function Home(props){
        return(

            <div>
            <Header />
            <Conferences />
            <Footer />
            </div>

        )
}
export default Home;