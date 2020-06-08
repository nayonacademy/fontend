import React from 'react';
import TopNav from "./header";
import Sidebar from "./sidebar";
import Container from "./container";
class Home extends React.Component{
    render(){
        return(
            <div className="bodycontainer">
            
            <Sidebar />
            <div className="body-content-container">
            <TopNav />
            <Container />
            </div>
            </div>

        )
    }
}
export default Home;