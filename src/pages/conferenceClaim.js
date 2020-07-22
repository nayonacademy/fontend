import React, {useState} from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
const API_URL = process.env.REACT_APP_API_URL;

function ConferenceClaim(props){
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [conference_name, setConferenceName] = useState("");
    const [street_address, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("hello", fullname, email, website, conference_name, street_address, city, state, zipcode);
        axios.post(API_URL+"/api/claim/list/", {
            fullname,
            email,
            website,
            conference_name,
            street_address,
            city,
            state,
            zipcode
        }).then(result => {
            console.log(result);
            if (result.status === 201) {
                console.log(result);
                window.location.href = "/claim";
            }
        }).catch(e => {

        });

    }
        return(
            <div className="body-wrapper">
            <div className="b2b-container-signup">
              <div className="columns-9 w-row">
                <div className="column-27 w-col w-col-6">
                  <h1 className="heading-claim">Extend your reach.</h1>
                  <p className="paragraph">With ConferenceRanker we give businesses and conferences the opportunity to reach their customers and attendees in a very engagement-centric way. All your reviews, information, contact &amp; ticket sales right through our hub. We offer total control over the way people see you. In an age where users and yearning for transparency, we provide that. All for free.<br/></p>
                </div>
                <div className="w-col w-col-6">
                  <div className="card claim">
                    <h1 className="heading-claim form">Claim your conference and start for free.</h1>
                    <div className="w-form">
                        <form onSubmit={handleSubmit}>
                            <label>Full name</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                max={256} name="fullname"
                                value={fullname}
                                placeholder="Full name"
                                onChange={e => setFullName(e.target.value)} />
                            <label>Email address</label>
                            <input
                                type="email"
                                className="claim-form w-input"
                                max="256"
                                name="email"
                                value={email}
                                placeholder="Email address"
                                onChange={e => setEmail(e.target.value)} />
                            <label>Website</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                max="256"
                                name="website"
                                value={website}
                                placeholder="Website"
                                onChange={e => setWebsite(e.target.value)} />
                            <label >Conference Name</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                max={256}
                                name="conference_name"
                                value={conference_name}
                                placeholder="Conference or Business Name"
                                onChange={e => setConferenceName(e.target.value)} />
                            <label >Street Address</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                max={256}
                                name="street_address"
                                value={street_address}
                                placeholder="Street Address"
                                onChange={e => setStreetAddress(e.target.value)} />
                            <div className="columns-8 w-row">
                              <div className="column-24 w-col w-col-4"><label >City</label>
                                  <input
                                      type="text"
                                      className="claim-form city w-input"
                                      max={256}
                                      name="city"
                                      value={city}
                                      placeholder="City"
                                      onChange={e => setCity(e.target.value)} /></div>
                              <div className="column-25 w-col w-col-4"><label  className="field-label">State</label>
                                  <input
                                      type="text"
                                      className="claim-form state w-input"
                                      max={256}
                                      name="state"
                                      value={state}
                                      placeholder="State"
                                      onChange={e => setState(e.target.value)} /></div>
                              <div className="column-26 w-col w-col-4"><label>Zip</label>
                                  <input
                                      type="text"
                                      className="claim-form zip w-input"
                                      max={256}
                                      name="zipcode"
                                      value={zipcode}
                                      placeholder="zipcode"
                                      onChange={e => setZipcode(e.target.value)} /></div>
                            </div>
                            <input type="submit" value="Start" className="submit-button-2 w-button"/>
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
            </div>
          </div>
        )
}
export default ConferenceClaim;