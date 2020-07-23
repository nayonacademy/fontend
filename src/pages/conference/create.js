import React, {useState, Component} from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import mockup from '../../img/mock.jpg';
import plusCircle from "../../img/plus-circle.svg";
import chevronRight from "../../img/chevron-right.svg"
import Layout from "../layouts";
import { conference_create } from '../../components/repository';

class ConferenceCreate extends Component{
    constructor(props) {
        super(props);
        this.state = { name:'',website:'',about:'',phone:'',email:'',address:'',city:'',zipCode:'',speakers:'speakers',facebook:'',twitter:'',instagram:'',organizerID:'',locations:'',user:1,category:1};
        this.handleInputChange =this.handleInputChange.bind(this);
        this.submitConference =this.submitConference.bind(this);
      }
    
      handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      submitConference(event){
        event.preventDefault();
        conference_create(this.state)
            .then(token => this.props.history.push('/dashboard'))
            .catch(err => document.getElementById("loginErr").innerHTML= "<div className='alert alert-danger'>" + err + "</div>");
      } render(){
        return(
            <Layout>
            <Header />
            <div className="breadcrumbs">
                <h1 className="breakcrumbs-heading">Settings</h1><img src={chevronRight} width="18"
                                                                      alt="" className="image-2"/>
                <h1 className="breakcrumbs-heading current">Account Information</h1>
            </div>
            <div className="body-wrapper">
            <div className="b2b-container-onboarding">
                <div className="onboarding-col-info w-row">
                <div className="column-27 w-col w-col-8 w-col-small-small-stack">
                    <div className="card information">
                    <div className="w-form">
                        <form className="form-information w-clearfix" onSubmit={this.submitConference}>
                        <div className="form-first-half">
                            <label htmlFor="Profile-name">Display name</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="name" data-name="Profile name" placeholder="Enter your conference name" id="Profile-name"  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Website">Company website</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="website" data-name="Website" placeholder="Enter company website" id="Website"  onChange={this.handleInputChange} required
                            />
                            <label htmlFor="Website-4">Write an about section</label>
                            <textarea placeholder="Let people know what you're about." maxLength={5000} id="field" name="about" className="claim-form text w-input" onChange={this.handleInputChange}
                            />
                            <label htmlFor="Business-phone">Business phone</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="phone" data-name="Business phone" placeholder="Enter company website" id="Business-phone" required  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Website-7">Business email</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="email" data-name="Website 3" placeholder="Enter company website" id="Website-3" required  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Mailing-Address">Business street address</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="address" data-name="Mailing Address" id="Mailing-Address" required  onChange={this.handleInputChange}
                            />
                            <label htmlFor="City">Business city location</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="city" data-name="City" id="City" required  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Zipcode-6">Business zipcode</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="zipCode" data-name="Zipcode" id="Zipcode" required  onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-second-half">
                            <div className="recommended-speakers-col w-row">
                            <div className="w-col w-col-11">
                                <p>
                                We recommend having at least three notable speakers or
                                people in your list. You can add up to five.
                                </p>
                                <input type="text" hidden name="speakers" value="speakers" />
                                <input type="text" hidden name="user" value="1" />
                                <input type="text" hidden name="category" value="1" />
                            </div>
                            <div className="w-col w-col-1">
                                <img src={plusCircle} width={30} data-w-id="6e3c0339-6cf5-1654-fe2e-7e5a777f4bae" className="add-speaker"
                                />
                            </div>
                            </div>
                            <div className="positions _1 w-row">
                            <div className="w-col w-col-6">
                                <label htmlFor="Person">Notable speaker or person</label>
                                <input type="text" className="claim-form speaker w-input" maxLength={256} name="Person" data-name="Person" placeholder="Bill Gates" id="Person"
                                />
                            </div>
                            <div className="w-col w-col-6">
                                <label htmlFor="Zipcode-6">Position</label>
                                <input type="text" className="claim-form founder w-input" maxLength={256} name="Zipcode-3" data-name="Zipcode 3" placeholder="Founder " id="Zipcode-3"
                                />
                            </div>
                            </div>
                            <div className="positions _2 w-row">
                            <div className="w-col w-col-6">
                                <label htmlFor="Person-2">Notable speaker or person</label>
                                <input type="text" className="claim-form speaker w-input" maxLength={256} name="Person" data-name="Person" placeholder="Satya Nadella" id="Person-2"
                                />
                            </div>
                            <div className="w-col w-col-6">
                                <label htmlFor="Position">Position</label>
                                <input type="text" className="claim-form founder w-input" maxLength={256} name="Position" data-name="Position" placeholder="CEO" id="Position"
                                />
                            </div>
                            </div>
                            <div className="positions _3 w-row">
                            <div className="w-col w-col-6">
                                <label htmlFor="Person-3">Notable speaker or person</label>
                                <input type="text" className="claim-form speaker w-input" maxLength={256} name="Person" data-name="Person" placeholder="Kevin Scott" id="Person-3"
                                />
                            </div>
                            <div className="w-col w-col-6">
                                <label htmlFor="Position-2">Position</label>
                                <input type="text" className="claim-form founder w-input" maxLength={256} name="Position" data-name="Position" placeholder="CTO" id="Position-2"
                                />
                            </div>
                            </div>
                            <div className="positions _4 w-row">
                            <div className="w-col w-col-6">
                                <label htmlFor="Person-5">Notable speaker or person</label>
                                <input type="text" className="claim-form speaker w-input" maxLength={256} name="Person-5" data-name="Person 5" placeholder="Kevin Scott" id="Person-5"
                                />
                            </div>
                            <div className="w-col w-col-6">
                                <label htmlFor="Position-4">Position</label>
                                <input type="text" className="claim-form founder w-input" maxLength={256} name="Position-4" data-name="Position 4" placeholder="CTO" id="Position-4"
                                />
                            </div>
                            </div>
                            <div className="positions _5 w-row">
                            <div className="w-col w-col-6">
                                <label htmlFor="Person-4">Notable speaker or person</label>
                                <input type="text" className="claim-form speaker w-input" maxLength={256} name="Person-4" data-name="Person 4" placeholder="Kevin Scott" id="Person-4"
                                />
                            </div>
                            <div className="w-col w-col-6">
                                <label htmlFor="Position-3">Position</label>
                                <input type="text" className="claim-form founder w-input" maxLength={256} name="Position-3" data-name="Position 3" placeholder="CTO" id="Position-3"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="form-third-half">
                            <div className="social-media-links w-row">
                            <div className="w-col w-col-11">
                                <p>
                                Add social media links. Users will be able to see these
                                links on your public profile.
                                </p>
                            </div>
                            <div className="column-30 w-col w-col-1" />
                            </div>
                            <label htmlFor="Facebook-link">Facebook link</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="facebook" data-name="Facebook link" placeholder="Facebook  link" id="Facebook-link"  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Twitter-link">Twitter link</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="twitter" data-name="Twitter link" placeholder="Twitter link" id="Twitter-link"  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Instagram-link">Instagram link</label>
                            <input type="text" className="claim-form w-input" maxLength={256} name="instagram" data-name="Instagram link" placeholder="Instagram link" id="Instagram-link"  onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-third-half">
                            <div className="recommended-speakers-col w-row">
                            <div className="w-col w-col-11">
                                <p>
                                We recommend letting us pull your event data from
                                TicketMaster, EventBrite, or StubHub. We will
                                automatically populate your location information
                                (independent from your business location). <br />
                                <br />
                                Our ticket sale feature is currently in development and
                                will be released soon.&nbsp;At that point we will still
                                affiliate with the aforementioned, but will also offer a
                                more personalized approach.
                                <br />‍<br />
                                You can add your event locations, dates, and times, on the
                                next page.{" "}
                                </p>
                            </div>
                            <div className="column-31 w-col w-col-1" />
                            </div>
                            <input type="text" className="claim-form w-input" maxLength={256} name="locations" placeholder="organizerID"  onChange={this.handleInputChange}
                            />
                            <label htmlFor="Person-6">Organization ID</label>
                            <p>
                            If you have an organization ID from any of the listed
                            affiliates below, please enter it below.{" "}
                            </p>
                            <input type="text" className="claim-form w-input" maxLength={256} name="organizerID" placeholder="organizerID"  onChange={this.handleInputChange}
                            />
                        </div>
                        <input type="submit" defaultValue="Next" data-wait="Please wait..." className="submit-button-4 w-button"
                        />
                        </form>
                        <div id="loginErr"></div>
                        <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="column-28 w-col w-col-4 w-col-small-small-stack">
                    <img src={mockup} width={278} />
                </div>
                </div>
            </div>
            </div>
            <Footer />
            </Layout>
        )
    }
}
export default ConferenceCreate;
