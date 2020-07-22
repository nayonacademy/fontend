import React from 'react';
import TopNav from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Layout from "../Layouts";

function CategoryDelete(props){
        return(
            <Layout>
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav />
            {/* <Container /> */}
            <h1>Hello create</h1>  
            </div>
            </div>
            </Layout>
        )
}
export default CategoryDelete;