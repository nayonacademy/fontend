import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
const API_URL = process.env.REACT_APP_API_URL;
function Conferences(props){
  const [data, setData] = useState([]);
  useEffect(()=>{
    const GetData = async () =>{
      const result = await axios(API_URL+'/api/conference/list/');
      setData(result.data.results);
    };
    GetData();
  },[]);
        return(
            <>
            <Header />
            <div className="main">
            <div className="key">
              <div className="key-col w-row">
                <div className="key-rank-col w-col w-col-3">
                  <div className="key-ranking">Rank</div>
                </div>
                <div className="key-name-col w-col w-col-3">
                  <div className="key-name">Name</div>
                </div>
                <div className="key-rating-col w-col w-col-3">
                  <div className="key-rating">Rating</div>
                </div>
                <div className="key-category-col w-col w-col-3">
                  <div className="key-category">Category</div>
                </div>
              </div>
            </div>
              {data.map(function(item, i){
              return <div data-w-id="86ee10ea-5d7b-e500-d866-67b9256afbe6" className="list-item-container i">
                <div className="list-item-button">
                  <div className="key-col w-row">
                    <div className="key-rank-col w-col w-col-3">
                      <div className="rank">#{i}</div>
                    </div>
                    <div className="key-name-col w-col w-col-3">
                      <div className="name">{item.name}</div>
                    </div>
                    <div className="key-rating-col w-col w-col-3">
                      <div className="rating"><strong className="current_star global"></strong></div>
                    </div>
                    <div className="key-category-col w-col w-col-3">
                      <div className="category_heading"><span className="category business">Business</span></div>
                    </div>
                  </div>
                </div>
              </div>
            })}

          </div>
          <Footer />
          </>
        )
}
export default Conferences;