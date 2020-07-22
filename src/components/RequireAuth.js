import React, { Component } from "react";
import {
    Redirect
} from 'react-router-dom';
import {isAuthenticated} from "./repository";
// import { connect } from "react-redux";

class RequireAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: localStorage.getItem('x-access-token')
        }
    }

    render(){
        if (this.state.auth) {
            return this.props.children;
        }
        return <Redirect to={'/login'} />;
    }
};

export default RequireAuth; //connect(mapStateToProps, null)()