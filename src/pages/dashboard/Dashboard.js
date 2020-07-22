import React from 'react';
import TopNav from "./header";
import Sidebar from "./sidebar";
import Container from "./container";
import Layout from "../layouts";
function Home(props){
        return(
            <Layout>
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav />
            <Container />
            </div>
            </div>
            </Layout>
        )
}
export default Home;