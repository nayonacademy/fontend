import React from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
function Profile(props){
        return(
          <>
          <Header />
            <div className="user-template-wrapper user">
            <div className="section public">
              <div className="container-template w-container">
                <div className="con title user">
                  <h1 className="heading title user public">Cameron B.</h1>
                  <h1 className="heading sub user">Cameron B&#x27;s public profile. Find information about their past conference attendances and reviews.</h1>
                </div>
                <div className="card">
                  <div className="w-row">
                    <div data-w-id="6cf8b094-7b14-efd4-8492-9917c68227dd" className="reviews-col w-col w-col-4">
                      <div className="reviews-analytics-span">0</div>
                      <h1 className="analytics">Reviews</h1>
                      <div className="tool-tip reviews">
                        <div className="card tooltip overview">
                          <p className="paragraph-3">This is how many reviews this user has left.</p>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="6cf8b094-7b14-efd4-8492-9917c68227e6" className="reads-col w-col w-col-4">
                      <div className="reads-analytics-span">0</div>
                      <h1 className="analytics">Reads</h1>
                      <div className="tool-tip reads">
                        <div className="card tooltip overview">
                          <p className="paragraph-3">This is how many people have read this user&#x27;s reviews.</p>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="6cf8b094-7b14-efd4-8492-9917c68227ef" className="useful-col w-col w-col-4">
                      <div className="useful-analytics-span">0</div>
                      <h1 className="analytics">Useful</h1>
                      <div className="tool-tip usefuls">
                        <div className="card tooltip overview">
                          <p className="paragraph-3">This is how many people found this user&#x27;s reviews helpful.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="w-row">
                    <div data-w-id="65cda72f-6548-287a-3406-579f1d073ba3" className="reviews-col w-col w-col-4">
                      <div className="attended-analytics-span">0</div>
                      <h1 className="analytics">Conferences attended</h1>
                    </div>
                    <div data-w-id="65cda72f-6548-287a-3406-579f1d073ba8" className="reads-col w-col w-col-4">
                      <div className="favs-analytics-span">0</div>
                      <h1 className="analytics">Favorites list</h1>
                    </div>
                    <div data-w-id="65cda72f-6548-287a-3406-579f1d073bad" className="column-23 w-col w-col-4">
                      <div className="pics-analytics-span">0</div>
                      <h1 className="analytics">Pictures added</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section public content">
              <div className="reviews-list-container">
                <div className="reviews-list">
                  <div className="container-template w-container">
                    <div className="card reviews-aggregate-not-found">
                      <div>You haven&#x27;t left any reviews. When you leave a review, they will appear on this card.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favorites-list-container">
                <div className="favorites-list card">
                  <ul className="list-4-copy">
                    <li>
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-item-3">
                      <div className="list-item-button">
                        <div className="key-col w-row">
                          <div className="key-rank-col w-col w-col-3">
                            <div className="rank">#1</div>
                          </div>
                          <div className="key-name-col w-col w-col-3">
                            <div className="name">ABC Conference</div>
                          </div>
                          <div className="key-rating-col w-col w-col-3">
                            <div className="rating"><strong className="current_star global"></strong></div>
                          </div>
                          <div className="key-category-col w-col w-col-3">
                            <div className="category_heading"><span className="category tech">Tech</span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pictures-list-container">
                <div className="card picture">
                  <div className="card-title pictures">
                    <h5 className="card-name pictures">Cameron B.</h5>
                    <h5 className="card-date pictures">April 20, 2020</h5>
                    <h1 className="card-picture-conference"><a href="../list-item-page-template.html"><span className="conference-id">Abc conference</span></a></h1>
                  </div>
                  <div className="card-title pictures">
                    <h1 className="card-heading pictures">This is the title that will accompany the photo posts.</h1>
                  </div><a href="#" className="w-inline-block w-lightbox"><img src="../images/AdobeStock_220693976.jpeg" sizes="100vw" alt=""/></a>
                  <div className="like-container picture">
                    <div className="helpful-text-span">Do you like this photo?</div><img src="../images/heart_correct.svg" data-w-id="05883bb1-61eb-6e5d-3a79-2a4ee3636f0a" alt="" className="heart-favorites"/></div><img src="../images/flag.svg" width="19" data-w-id="05883bb1-61eb-6e5d-3a79-2a4ee3636f0b" alt="" className="flag"/></div>
                <div className="card picture">
                  <div className="card-title pictures">
                    <h5 className="card-name pictures">Cameron B.</h5>
                    <h5 className="card-date pictures">April 20, 2020</h5>
                    <h1 className="card-picture-conference"><a href="../list-item-page-template.html"><span className="conference-id">Abc conference</span></a></h1>
                  </div>
                  <div className="card-title pictures">
                    <h1 className="card-heading pictures">This is the title that will accompany the photo posts.</h1>
                  </div><a href="#" className="w-inline-block w-lightbox"><img src="../images/AdobeStock_220693976.jpeg" sizes="100vw" alt=""/></a>
                  <div className="like-container picture">
                    <div className="helpful-text-span">Do you like this photo?</div><img src="../images/heart_correct.svg" data-w-id="32f507b1-4390-30da-7cce-4dc0c2622932" alt="" className="heart-favorites"/></div><img src="../images/flag.svg" width="19" data-w-id="32f507b1-4390-30da-7cce-4dc0c2622933" alt="" className="flag"/></div>
                <div className="card picture">
                  <div className="card-title pictures">
                    <h5 className="card-name pictures">Cameron B.</h5>
                    <h5 className="card-date pictures">April 20, 2020</h5>
                    <h1 className="card-picture-conference"><a href="../list-item-page-template.html"><span className="conference-id">Abc conference</span></a></h1>
                  </div>
                  <div className="card-title pictures">
                    <h1 className="card-heading pictures">This is the title that will accompany the photo posts.</h1>
                  </div><a href="#" className="w-inline-block w-lightbox"><img src="../images/AdobeStock_220693976.jpeg" sizes="100vw" alt=""/></a>
                  <div className="like-container picture">
                    <div className="helpful-text-span">Do you like this photo?</div><img src="../images/heart_correct.svg" data-w-id="4109f857-a1ed-8bc7-76d3-c28b3cc87b9d" alt="" className="heart-favorites"/></div><img src="../images/flag.svg" width="19" data-w-id="4109f857-a1ed-8bc7-76d3-c28b3cc87b9e" alt="" className="flag"/></div>
              </div>
            </div>
          </div>       
          <Footer />
          </> 
        )
}
export default Profile;