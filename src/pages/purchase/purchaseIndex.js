import React from 'react';
import TopNav from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import Purchase from "./purchase";
import Layout from "../layouts";

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