import React, {useState, Component} from 'react';
import { category_create } from '../../components/repository';
import TopNav from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import Layout from "../layouts";

class CategoryCreate extends Component{
    constructor(props) {
        super(props);
        this.state = { name: ''};
        this.handleInputChange =this.handleInputChange.bind(this);
        this.submitCategory =this.submitCategory.bind(this);
      }
    
      handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      submitCategory(event){
        event.preventDefault();
        category_create(this.state)
            .then(token => this.props.history.push('/category'))
            .catch(err => document.getElementById("loginErr").innerHTML= "<div className='alert alert-danger'>" + err + "</div>");
      } render(){
        return(
            <Layout>
            <div className="bodycontainer">
            <Sidebar />
            <div className="body-content-container">
            <TopNav />
            {/* <Container /> */}
            <div className="body-wrapper log-in">
                <div className="access-container w-container">
                    <div className="card sign-up">
                    
                    <div className="">
                        <div className="">
                        <form onSubmit={this.submitCategory}>
                            <div className="">
                            <label className="email-label">Category Name</label>
                            {/*<input type="text" value={username} onChange={event => setUsername(event.target.value)} className="user-email w-input" max={256} name="username" placeholder="Username" />*/}
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleInputChange}
                                className="user-email w-input" max={256}
                                placeholder="Category name"
                            />
                            </div>
                            <div>
                            <input type="submit" value="Add" className="w-button"/>
                            </div>
                        </form>
                        <div id="loginErr"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </Layout>
        )
}
}
export default CategoryCreate;