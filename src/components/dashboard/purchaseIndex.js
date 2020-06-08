import React from 'react';
import TopNav from "./header";
import Sidebar from "./sidebar";
import Purchase from "./purchase";
class PurchaseIndex extends React.Component{
    render(){
        return(
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav/>
            <Purchase/>
            </div>
            </div>
        )
    }
}
export default PurchaseIndex;