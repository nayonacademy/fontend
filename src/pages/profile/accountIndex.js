import React from 'react';
import Header from "../HeaderSimple";
import Footer from "../Footer";
import Account from "./AccountInformation";
function AccountIndex(props){
        return(
            <>
            <Header />
            <div className="breadcrumbs">
            <h1 className="breakcrumbs-heading">Settings</h1>
            <img
                src="../../images/chevron-right.svg"
                width={18}
                className="image-2"
            />
            <h1 className="breakcrumbs-heading current">Account Information</h1>
            </div>
            <Account />
            <Footer />
            </>
        )
}
export default AccountIndex;