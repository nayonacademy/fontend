import React, {useState} from 'react';
import TopNav from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Layout from "../Layouts";
const API_URL = process.env.REACT_APP_API_URL;

function CategoryCreate(props){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [name, setName] = useState("");
    const { setAuthTokens } = useAuth();
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post(API_URL+"/api/category/list/", {
        name
      }).then(result => {

        if (result.status === 201) {
          console.log(result);
          window.location.href = "/category";
      }
      }).catch(e => {

      });
  
    }
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
                        <form onSubmit={handleSubmit}>
                            <div className="">
                            <label className="email-label">Category Name</label>
                            {/*<input type="text" value={username} onChange={event => setUsername(event.target.value)} className="user-email w-input" max={256} name="username" placeholder="Username" />*/}
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="user-email w-input" max={256}
                                placeholder="Category name"
                            />
                            </div>
                            <div>
                            <input type="submit" value="Add" className="w-button"/>
                            </div>
                        </form>
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
export default CategoryCreate;