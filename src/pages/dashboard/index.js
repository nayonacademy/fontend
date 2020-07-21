import React from 'react';
import TopNav from "./header";
import Sidebar from "./sidebar";
import Container from "./container";
function Home(props){
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
export default Home;