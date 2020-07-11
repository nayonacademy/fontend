import React, {useState} from 'react';
import TopNav from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import Container from "../dashboard/container";
import axios from "axios";
import { useAuth } from "../../context/auth";
const API_URL = process.env.REACT_APP_API_URL;
function CategoryCreate(props){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [name, setName] = useState("");
    const { setAuthTokens } = useAuth();
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post(API_URL+"/api/jwtauth/token/", {
        name
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
  
    }
        return(
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
        )
}
export default CategoryCreate;