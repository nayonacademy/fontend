import React from 'react';
import TopNav from "./header";
import Sidebar from "./sidebar";
import Settings from "./settings";
class SettingsIndex extends React.Component{
    render(){
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
}
export default SettingsIndex;