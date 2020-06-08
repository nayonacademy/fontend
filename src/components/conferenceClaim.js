import React from 'react';
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
class ConferenceClaim extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
             fullname: '',
             email: '',
             website: '',
             conference_name: '',
             street_address: '',
             city: '',
             state: '',
             zipcode: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event:any) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    handleSubmit(event:any) {
        event.preventDefault();

        let fullname = this.state.fullname;
        let email = this.state.email;
        let website = this.state.website;
        let conference_name = this.state.conference_name;
        let street_address = this.state.street_address;
        let city = this.state.city;
        let state = this.state.state;
        let zipcode = this.state.zipcode;
// POST data
        console.log(fullname, email, website, conference_name, street_address, city, state, zipcode);
//         let response = axios.post(API_URL+"/api/claim/list/", {
//             fullname,
//             email,
//             website,
//             conference_name,
//             street_address,
//             city,
//             state,
//             zipcode,
//         }).then(result => {
//             console.log(result);
//             if (result.status == 201) {
//                 console.log(result);
//                 window.location.href = "/dashboard";
//             } else {
//
//             }
//         }).catch(e => {
//
//         });

    }
    render(){
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
                      <form onSubmit = { this.handleSubmit }>
                          <label>Full name</label>
                        <input type="text" onChange={this.handleChange} className="claim-form w-input" max={256} name="fullname" data-name="Name" placeholder="Full name" id="name" />
                          <label>Email address</label>
                          <input type="email" onChange={this.handleChange} className="claim-form w-input" max="256" name="email" data-name="Email address" placeholder="Email address" id="Email-address" />
                              <label>Website</label><input type="text" className="claim-form w-input" max="256" name="website" data-name="Website" placeholder="Website" id="Website" />
                                  <label >Conference Name</label>
                                  <input type="text" onChange={this.handleChange} className="claim-form w-input" max={256} name="conference_name" data-name="Conference or Business Name" placeholder="Conference or Business Name" id="Conference-or-Business-Name" />
                                      <label >Street Address</label>
                                  <input type="text" onChange={this.handleChange} className="claim-form w-input" max={256} name="street_address" data-name="Mailing Address" placeholder="Street Address" id="Mailing-Address" />
                        <div className="columns-8 w-row">
                          <div className="column-24 w-col w-col-4"><label >City</label><input type="text" onChange={this.handleChange} className="claim-form city w-input" max={256} name="city" data-name="City" placeholder="City" id="City" /></div>
                          <div className="column-25 w-col w-col-4"><label  className="field-label">State</label><input type="text" onChange={this.handleChange} className="claim-form state w-input" max={256} name="State" data-name="state" placeholder="State" id="State" /></div>
                          <div className="column-26 w-col w-col-4"><label>Zip</label><input type="text" onChange={this.handleChange} className="claim-form zip w-input" max={256} name="Zipcode" data-name="Zipcode" placeholder="zipcode" id="Zipcode" /></div>
                        </div><input type="submit" value="Start!" data-wait="Please wait..." className="submit-button-2 w-button"/>
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
}
export default ConferenceClaim;