import React from 'react';
function CheckList(props){
        return(
            <div className="b2b-container-onboarding">
            <div className="onboarding-progress">
                <div className="onboarding-line"></div>
                <div className="div-block-24">
                <div className="onboarding-circle completed"></div>
                <p>password</p>
                </div>
                <div className="div-block-23">
                <div className="onboarding-circle completed"></div>
                <p>information</p>
                </div>
                <div className="div-block-22">
                <div className="onboarding-circle current"></div>
                <p>finalize</p>
                </div>
            </div>
            <div className="card checlist">
                <div className="card-heading">
                <h1 className="card-title">Here we go!</h1>
                </div>
                <p className="paragraph checklist">You&#x27;re done with the bulk of it. Now just some tiny details for smooth sailing.</p>
            </div>
            <div className="finalize list card step">
                <div className="columns-10 w-row">
                <div className="column-32 w-col w-col-2">
                    <div className="onboarding-circle completed"></div>
                </div>
                <div className="w-col w-col-10">
                    <p className="step _1"><strong>Claim your account</strong></p>
                    <p>The first step! Claim your account and claim control. </p>
                </div>
                </div>
            </div>
            <a href="../conference/dashboard.html" className="link-block-2 w-inline-block">
                <div className="finalize list card step">
                <div className="columns-10 w-row">
                    <div className="column-32 w-col w-col-2">
                    <div className="onboarding-circle"></div>
                    </div>
                    <div className="w-col w-col-10">
                    <p className="step _2"><strong className="bold-text">Add a tag for your conference</strong></p>
                    <p>Add a category tag so people can reach you even easier.</p>
                    </div>
                </div>
                </div>
            </a>
            <a href="../conference/dashboard.html" target="_blank" className="link-block-3 w-inline-block">
                <div className="finalize list card step">
                <div className="columns-10 w-row">
                    <div className="column-32 w-col w-col-2">
                    <div className="onboarding-circle"></div>
                    </div>
                    <div className="w-col w-col-10">
                    <p className="step _3"><strong>Go to your reviews</strong></p>
                    <p>See how easy it is to view and respond to reviews.</p>
                    </div>
                </div>
                </div>
            </a>
            <div className="finalize list card step">
                <div className="columns-10 w-row">
                <div className="column-32 w-col w-col-2">
                    <div className="onboarding-circle"></div>
                </div>
                <div className="w-col w-col-10">
                    <p className="step _4"><strong>Finish!</strong></p>
                    <p>Confirm everything looks as it should. Then, sit back, relax, and wait for reviews!</p>
                </div>
                </div>
            </div>
            </div>
        )
}
export default CheckList;