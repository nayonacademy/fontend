import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
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