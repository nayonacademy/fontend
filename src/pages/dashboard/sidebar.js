import React from 'react';
import { useAuth } from "../../context/auth";
function DashboardSidebar(props) {
    const { setAuthTokens } = useAuth();
    function logOut() {
        setAuthTokens();
        localStorage.removeItem('x-access-token');
    }
    
        return(
            <div className="menu-container">
            <div className="logo">
                <h1 className="heading dashboard">ConferenceRanker</h1>
            </div>
            <div className="store-navigation">
                <a href="#" onClick={logOut} className="store-name admin">Logout</a>
                <div className="store-name store">Need to contact us? </div>
            </div>
            <div className="card">
                <ul id="nav-list" className="nav-list w-list-unstyled">
                <li className="list-item-2 active">
                    <a href="#" className="w-inline-block">
                    <div className="icon dashboard"></div>
                    </a>
                    <div className="text-block-9 dashboard active"><a href="/dashboard" aria-current="page" className="dashboard-white-link w--current">Reviews</a></div>
                </li>
                <li className="list-item-2">
                    <div className="icon purchases"></div>
                    <div className="text-block-9 customers"><a href="/purchase" className="dashboard-white-link">Purchases</a></div>
                </li>
                <li className="list-item-2">
                    <div className="icon setting"></div>
                    <div className="text-block-9 customers"><a href="/settings" className="dashboard-white-link">Settings</a></div>
                </li>
                </ul>
            </div>
            </div>
        )
}
export default DashboardSidebar;