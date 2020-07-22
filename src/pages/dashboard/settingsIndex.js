import React from 'react';
import TopNav from "./Header";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
function SettingsIndex(props){
        return(

            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav/>
            <Settings/>
            </div>
            </div>

        )
}
export default SettingsIndex;