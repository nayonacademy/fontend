import React from 'react';
import TopNav from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import Layout from "../layouts";

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