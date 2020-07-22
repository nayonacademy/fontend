import React from 'react';
function Header(props){
        return(

        <div className="header">
            <div className="co nav">
            <div className="logo-container">
                <a href="/" aria-current="page" className="logo-link w-inline-block w--current">logo</a>
            </div>
            <div className="nav-button-container">
                <a href="/login" className="sign-in-button w-button">Sign in</a>
                <a href="login.html" className="get-started-button w-button">Get Started</a></div>
            </div>
            <div className="con title">
            <h1 className="heading title">Search and rate conferences.</h1>
            <h1 className="heading sub">It&#x27;s never been easier to rate and find conferences, see who&#x27;s attending, buy tickets, and more. ConferenceRanker is #1 in the conference community.</h1>
            </div>
            <div className="search-container">
            <form className="search w-clearfix w-form">
                <input type="search" className="search-input w-input" name="query" placeholder="Search for conferences..." id="search" />
                <input type="submit" value="Find!" className="search-button w-button"/>
            </form>
            <div data-w-id="587b6506-c262-f95b-af7b-0542f628f541" className="refine-search-button">
                <div className="refine-text">Refine your search</div>
                <img src="images/more-horizontal-1.svg" alt="" className="more-img"/>
            </div>
            <div style={{opacity: 0}} className="form-container wrapper">
                <div className="form w-form">
                <form id="email-form" className="form">
                    <div className="w-row">
                    <div className="distance-col w-col w-col-4">
                        <label className="distance-label">Distance</label>
                        <select id="Distance" name="Distance" data-name="Distance" className="select-field w-select">
                            <option value="10 miles">&lt; 10 miles</option>
                            <option value="50 miles">&lt; 50 miles</option>
                            <option value="200 miles">&lt; 200 miles</option>
                            <option value="500 miles">&lt; 500 miles</option>
                        </select>
                    </div>
                    <div className="audience-col w-col w-col-4">
                        <label className="audience-label">Audience</label>
                        <select id="Audience" name="Audience" data-name="Audience" className="select-field w-select">
                            <option value="General">General</option>
                            <option value="Executives">Executives</option>
                            <option value="C-Suite">C-Suite</option>
                        </select>
                    </div>
                    <div className="category-col w-col w-col-4">
                        <label className="category-label">Category</label>
                        <select id="Category" name="Category" data-name="Category" className="select-field w-select">
                            <option value="Tech">Tech</option>
                            <option value="Business">Business</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Engineering ">Engineering</option>
                            <option value="Crypto">Crypto</option>
                            <option value="Finances">Finances</option>
                            <option value="Misc">Misc</option>
                            <option value="Conventions">Conventions</option>
                        </select>
                    </div>
                    </div>
                </form>
                <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                </div>
            </div>
            </div>
        </div>

        )
}
export default Header;