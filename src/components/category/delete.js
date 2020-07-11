import React from 'react';
import TopNav from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import Container from "../dashboard/container";
function CategoryDelete(props){
        return(
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav />
            {/* <Container /> */}
            <h1>Hello create</h1>  
            </div>
            </div>
        )
}
export default CategoryDelete;