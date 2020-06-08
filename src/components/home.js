import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Conferences from "./conferenses";
class Home extends React.Component{
    render(){
        return(

            <div>
            <Header />
            <Conferences />
            <Footer />
            </div>

        )
    }
}
export default Home;