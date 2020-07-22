import React from 'react';
import TopNav from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import Layout from "../Layouts";
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