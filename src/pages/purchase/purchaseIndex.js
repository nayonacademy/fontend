import React from 'react';
import TopNav from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Purchase from "./Purchase";
import Layout from "../Layouts";

function PurchaseIndex(props){
        return(
            <Layout>
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav/>
            <Purchase/>
            </div>
            </div>
            </Layout>
        )
}
export default PurchaseIndex;