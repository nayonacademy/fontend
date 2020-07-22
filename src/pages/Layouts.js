import React, { Component } from "react";
import Header  from './header';
import HeaderSimple from './headerSimple';

import RequireAuth from './../components/RequireAuth'
// import { RouteComponentProps } from 'react-router-dom';


class Layout extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log("Match from router: ",this.props.match)
    }

    renderHeader = () =>{
        if(this.props.header == "header"){
            return <Header />
        }else {
            return <HeaderSimple />
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* {this.renderHeader()} */}
                <RequireAuth>
                    <div className="main-box">
                        {this.props.children}
                    </div>
                </RequireAuth>
            </React.Fragment>
        );
    }
}

export default Layout;