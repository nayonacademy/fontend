import React from 'react';
function Settings(props){
        return(
            <div data-duration-in={300} data-duration-out={100} className="w-tabs">
            <div className="tabs-menu-2 w-tab-menu">
                <a data-w-tab="Tab 1" className="w-inline-block w-tab-link w--current">
                <div>Tab 1</div>
                </a>
                <a data-w-tab="Tab 2" className="w-inline-block w-tab-link">
                <div>Tab 2</div>
                </a>
                <a data-w-tab="Tab 3" className="w-inline-block w-tab-link">
                <div>Tab 3</div>
                </a>
            </div>
            <div className="w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="container-template w-container">
                    <div className="con title user">
                    <h1 className="heading title user">Settings</h1>
                    <h1 className="heading sub user">Change your account settings.</h1>
                        <p><a href="/onboarding/information/collection">Account Information</a></p>
                    </div>
                </div>
                <div className="container-template w-container">
                    <div className="card account-settings-card">
                    <div>
                        <div className="w-row">
                        <div className="w-col w-col-6" />
                        <div className="w-col w-col-6" />
                        </div>
                    </div>
                    <div>
                        <div className="w-row">
                        <div className="w-col w-col-6" />
                        <div className="w-col w-col-6" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                <div className="w-container">
                    <div className="con title user">
                    <h1 className="heading title user">Hi, Cameron</h1>
                    <h1 className="heading sub user">
                        This is your ticket purchase history page. You can see the
                        conferences you've purchased and attended.
                    </h1>
                    </div>
                    <div className="user-information">
                    <div className="card">
                        <div className="w-row">
                        <div className="reviews-col w-col w-col-4">
                            <div className="reviews-analytics-span">0</div>
                            <h1 className="analytics">Reviews</h1>
                        </div>
                        <div className="reads-col w-col w-col-4">
                            <div className="reads-analytics-span">0</div>
                            <h1 className="analytics">Reads</h1>
                        </div>
                        <div className="useful-col w-col w-col-4">
                            <div className="useful-analytics-span">0</div>
                            <h1 className="analytics">Useful</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane" />
            </div>
            </div>
        )
}
export default Settings;