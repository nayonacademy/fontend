import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import InformationCollection from "./informationCollection";
class InformationCollectionIndex extends React.Component{
    render(){
        return(

            <div>
            <Header />
            <InformationCollection />
            <Footer />
            </div>

        )
    }
}
export default InformationCollectionIndex;