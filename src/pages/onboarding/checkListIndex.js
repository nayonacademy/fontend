import React from 'react';
import Header from "../HeaderSimple";
import Footer from "../Footer";
import CheckList from "./Checklist";
function CheckListIndex(props){
        return(
            <div className="body-wrapper">
            <Header />
            <CheckList />
            <Footer />
            </div>
        )
}
export default CheckListIndex;