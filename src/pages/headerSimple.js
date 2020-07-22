import React from 'react';

function HeaderSimple(props){
  const authcheck = () =>{
    if(localStorage.getItem('x-access-token')){
      return <a href="/" onClick={logOut} className="sign-in-button w-button">Logout</a>
    }else{
      return <a href="/login" className="sign-in-button w-button">Sign in</a>
    }
  }
  function logOut() {
    localStorage.removeItem('x-access-token');
  }
  return(
    <div className="co nav">
      <div className="logo-container">
        <a href="/" className="logo-link w-inline-block" />
      </div>
      <form action="/search" className="nav-search w-form">
        <input
          type="text"
          className="search-input-nav w-input"
          maxLength={256}
          name="query"
          placeholder="Search…"
          id="search"
          required
        />
        <input
          type="submit"
          defaultValue="Search"
          className="search-button-2 w-button"
        />
      </form>
      <div className="nav-button-container">
        {authcheck()}
        <a href="/login" className="get-started-button w-button">
          Get Started
        </a>
      </div>
    </div>
  )

}
export default HeaderSimple;