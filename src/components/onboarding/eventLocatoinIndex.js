import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import EnentLocation from "./eventLocation";
class EventLocationIndex extends React.Component{
    render(){
        return(

            <div>
            <Header />
            <EnentLocation />
            <Footer />
            </div>

        )
    }
}
export default EventLocationIndex;