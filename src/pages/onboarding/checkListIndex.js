import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import CheckList from "./checklist";
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