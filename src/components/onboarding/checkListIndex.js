import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import CheckList from "./checklist";
class CheckListIndex extends React.Component{
    render(){
        return(
            <div className="body-wrapper">
            <Header />
            <CheckList />
            <Footer />
            </div>

        )
    }
}
export default CheckListIndex;