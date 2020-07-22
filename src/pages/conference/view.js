import React, {useEffect, useState} from 'react';
import Header from "../headerSimple";
import Footer from "../footer";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";
import mockup from '../../img/mock.jpg';
import plusCircle from "../../img/plus-circle.svg";
import chevronRight from "../../img/chevron-right.svg"
import Layout from "../Layouts";
const API_URL = process.env.REACT_APP_API_URL;

function ConferenceView(props){

    const [data, setData] = useState();
    useEffect(()=>{
      const GetData = async () =>{
        const result = await axios('http://localhost:8000/api/conference/1/');
        setData(result.data);
      };
      GetData();
    },[]);

        return(
            <Layout>
            <Header />
              <div className="id-rating-section">
                <div className="conference-heading-container w-row">
                <div className="conference-heading-container-left w-col w-col-6">
                    <div className="conference-id-name-and-info-container">
                    <h1 className="conference-id-name-span">ABC&nbsp;Conference</h1>
                    <div className="rr-container">
                        <img src="images/star_filled.svg" width={25} alt />
                        <img src="images/star_filled.svg" width={25} alt />
                        <img src="images/star_filled.svg" height={25} alt />
                        <img src="images/star_filled_half.svg" height={25} alt />
                        <img src="images/star-1.svg" alt />
                        <div className="text-block"> - 3.3k reviews</div>
                    </div>
                    <div className="conference-web-link-outer-container">
                        <div className="conference-web-link-container website w-clearfix">
                        <img
                            src="images/external-link.svg"
                            alt
                            className="external-icon"
                        />
                        <p className="conferece-website-link">www.abc.com</p>
                        </div>
                        <div className="conference-web-link-container contact w-clearfix">
                        <img
                            src="images/external-link.svg"
                            alt
                            className="external-icon contact"
                        />
                        <p className="conference-web-link-container contact text">
                            contact
                        </p>
                        </div>
                    </div>
                    <div className="external-conference-links-container">
                        <div
                        data-w-id="f05e6ac5-895f-9675-12eb-14a0802afa92"
                        className="conference-status hero w-clearfix"
                        >
                        <div style={{ opacity: 0, display: "none" }} className="tool-tip">
                            <div className="card tooltip hero">
                            <p className="paragraph-3">
                                What this mean?&nbsp;Conferences that aren't owned haven't
                                been claimed. Reviews cannot be guaranteed accurate. <br />
                                <br />
                                If you own this conference,{" "}
                                <a href="component/conference-claim.html">click here</a> to
                                get started - all for free.
                            </p>
                            </div>
                        </div>
                        <img src="images/white-circle.svg" alt className="not-owned" />
                        <p className="conference-web-link-container claim text">
                            Not currently owned
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="conference-heading-container-right w-col w-col-6">
                    <div className="circle-container">
                    <div id="percentagereturnrate" className="nerd">
                        <div className="circle inner">
                        <div className="circular-text-alt">Will return</div>
                        </div>
                        <div className="percentage-visible">
                        <div className="return-span">80%</div>
                        </div>
                        <svg viewBox="0 0 100 100">
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#eee"
                            strokeWidth={1}
                            fillOpacity={0}
                        />
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#FFEA82"
                            strokeWidth={6}
                            fillOpacity={0}
                            style={{
                            strokeDasharray: "295.416, 295.416",
                            strokeDashoffset: "59.0832"
                            }}
                        />
                        </svg>
                    </div>
                    <div id="percentageenjoymentrate" className="nerd">
                        <div className="circle inner">
                        <div className="circular-text-alt">Enjoyed the speakers</div>
                        </div>
                        <div className="percentage-visible">
                        <div className="enjoyed-span">80%</div>
                        </div>
                        <svg viewBox="0 0 100 100">
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#eee"
                            strokeWidth={1}
                            fillOpacity={0}
                        />
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#FFEA82"
                            strokeWidth={6}
                            fillOpacity={0}
                            style={{
                            strokeDasharray: "295.416, 295.416",
                            strokeDashoffset: "59.0832"
                            }}
                        />
                        </svg>
                    </div>
                    <div id="percentagelocatedrate" className="nerd">
                        <div className="circle inner">
                        <div className="circular-text-alt">Found it easy to find</div>
                        </div>
                        <div className="percentage-visible">
                        <div className="located-span">60%</div>
                        </div>
                        <svg viewBox="0 0 100 100">
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#eee"
                            strokeWidth={1}
                            fillOpacity={0}
                        />
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#FFEA82"
                            strokeWidth={6}
                            fillOpacity={0}
                            style={{
                            strokeDasharray: "295.416, 295.416",
                            strokeDashoffset: "118.166"
                            }}
                        />
                        </svg>
                    </div>
                    <div id="percentagerecommendedrate" className="nerd">
                        <div className="circle inner">
                        <div className="circular-text-alt">Networked with peers</div>
                        </div>
                        <div className="percentage-visible">
                        <div className="networked-span">100%</div>
                        </div>
                        <svg viewBox="0 0 100 100">
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#eee"
                            strokeWidth={1}
                            fillOpacity={0}
                        />
                        <path
                            d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                            stroke="#FFEA82"
                            strokeWidth={6}
                            fillOpacity={0}
                            style={{
                            strokeDasharray: "295.416, 295.416",
                            strokeDashoffset: 0
                            }}
                        />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div
                data-w-id="ec8bf705-2297-4e07-16d1-3aa00fbeb1b6"
                className="body-wrapper"
            >
                <div className="container-template w-container">
                <div className="main-listing-container">
                    <div data-duration-in={300} data-duration-out={100} className="w-tabs">
                    <div className="tabs-menu w-tab-menu" role="tablist">
                        <a
                        data-w-tab="Tab 1"
                        className="tabular w-inline-block w-tab-link"
                        id="w-tabs-0-data-w-tab-0"
                        href="#w-tabs-0-data-w-pane-0"
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-0"
                        aria-selected="false"
                        tabIndex={-1}
                        >
                        <div className="overview-tab">Overview</div>
                        </a>
                        <a
                        data-w-tab="Tab 2"
                        id="reviews"
                        className="tabular w-inline-block w-tab-link"
                        href="#w-tabs-0-data-w-pane-1"
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-1"
                        aria-selected="false"
                        tabIndex={-1}
                        >
                        <div className="reviews-tab">Reviews</div>
                        </a>
                        <a
                        data-w-tab="Tab 3"
                        className="tabular w-inline-block w-tab-link w--current"
                        id="w-tabs-0-data-w-tab-2"
                        href="#w-tabs-0-data-w-pane-2"
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-2"
                        aria-selected="true"
                        >
                        <div className="pictures-tab">Pictures</div>
                        </a>
                    </div>
                    <div className="w-tab-content">
                        <div
                        data-w-tab="Tab 1"
                        className="w-tab-pane"
                        id="w-tabs-0-data-w-pane-0"
                        role="tabpanel"
                        aria-labelledby="w-tabs-0-data-w-tab-0"
                        style={{}}
                        >
                        <div className="tabular-inner-container">
                            <div className="listing-main-col w-row">
                            <div className="listing-main-col-left w-col w-col-8 w-col-stack">
                                <div className="card tags">
                                <div className="card-title">
                                    <h1 className="card-heading">General information</h1>
                                </div>
                                <div className="tags-container">
                                    <div className="tag tech">
                                    <div className="tag-category">Tech</div>
                                    </div>
                                    <div className="tag audience">
                                    <div className="tag-reviews">3.3k reviews</div>
                                    </div>
                                    <div className="tag rating">
                                    <div className="tag-rating">3.5 stars</div>
                                    </div>
                                </div>
                                <div className="item-graph-details w-form">
                                    <form
                                    id="email-form-3"
                                    name="email-form-3"
                                    data-name="Email Form 3"
                                    className="item-graph"
                                    >
                                    <div className="graph-container">
                                        <div className="rating-col awesome w-row">
                                        <div className="w-col w-col-2">
                                            <label className="w-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                name="checkbox"
                                                data-name="Checkbox"
                                                className="w-checkbox-input"
                                            />
                                            <span className="w-form-label">Awesome</span>
                                            </label>
                                        </div>
                                        <div className="column-18 w-col w-col-8">
                                            <div className="graph-percentage outer">
                                            <div
                                                data-w-id="83a4ab87-b5d6-07aa-4c17-676d59406db9"
                                                style={{ width: "98%", height: 10 }}
                                                className="graph-fill-percentage awesome"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-col w-col-2">
                                            <div className="element-percentage-span">
                                            98%
                                            </div>
                                        </div>
                                        </div>
                                        <div className="rating-col great w-row">
                                        <div className="w-col w-col-2">
                                            <label className="w-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox-2"
                                                name="checkbox-2"
                                                data-name="Checkbox 2"
                                                className="w-checkbox-input"
                                            />
                                            <span className="w-form-label">Great</span>
                                            </label>
                                        </div>
                                        <div className="column-18 w-col w-col-8">
                                            <div className="graph-percentage outer">
                                            <div
                                                data-w-id="515b1bde-c4bd-298e-c31c-31337f0591cc"
                                                style={{ width: "5%", height: 10 }}
                                                className="graph-fill-percentage great"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-col w-col-2">
                                            <div className="element-percentage-span">
                                            5%
                                            </div>
                                        </div>
                                        </div>
                                        <div className="rating-col average w-row">
                                        <div className="w-col w-col-2">
                                            <label className="w-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox-3"
                                                name="checkbox-3"
                                                data-name="Checkbox 3"
                                                className="w-checkbox-input"
                                            />
                                            <span className="w-form-label">Average</span>
                                            </label>
                                        </div>
                                        <div className="column-18 w-col w-col-8">
                                            <div className="graph-percentage outer">
                                            <div
                                                data-w-id="f9843508-7286-e20c-a451-c0957a29ac19"
                                                style={{ width: "3%", height: 10 }}
                                                className="graph-fill-percentage average"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-col w-col-2">
                                            <div className="element-percentage-span">
                                            3%
                                            </div>
                                        </div>
                                        </div>
                                        <div className="rating-col poor w-row">
                                        <div className="w-col w-col-2">
                                            <label className="w-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox-4"
                                                name="checkbox-4"
                                                data-name="Checkbox 4"
                                                className="w-checkbox-input"
                                            />
                                            <span className="w-form-label">Poor</span>
                                            </label>
                                        </div>
                                        <div className="column-18 w-col w-col-8">
                                            <div className="graph-percentage outer">
                                            <div
                                                data-w-id="d6b6a5a4-4caa-3228-a7fe-dc0c53afeba2"
                                                style={{ width: "2%", height: 10 }}
                                                className="graph-fill-percentage poor"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-col w-col-2">
                                            <div className="element-percentage-span">
                                            2%
                                            </div>
                                        </div>
                                        </div>
                                        <div className="rating-col terrible w-row">
                                        <div className="w-col w-col-2">
                                            <label className="w-checkbox">
                                            <input
                                                type="checkbox"
                                                id="checkbox-5"
                                                name="checkbox-5"
                                                data-name="Checkbox 5"
                                                className="w-checkbox-input"
                                            />
                                            <span className="w-form-label">Terrible</span>
                                            </label>
                                        </div>
                                        <div className="column-18 w-col w-col-8">
                                            <div className="graph-percentage outer">
                                            <div
                                                data-w-id="f0dcaece-883e-2edb-21bf-94be781be322"
                                                style={{ width: "1%", height: 10 }}
                                                className="graph-fill-percentage terrible"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-col w-col-2">
                                            <div className="element-percentage-span">
                                            1%
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                    <div className="w-form-done">
                                    <div>
                                        Thank you! Your submission has been received!
                                    </div>
                                    </div>
                                    <div className="w-form-fail">
                                    <div>
                                        Oops! Something went wrong while submitting the
                                        form.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="card favorites small">
                                <h5 className="heading-4">Add to your favorites?</h5>
                                <img
                                    src="images/heart_correct_v2.svg"
                                    width={45}
                                    data-w-id="c750fff0-4ef0-2551-b0cb-0ec4a2f579d2"
                                    style={{ filter: "grayscale(100%)" }}
                                    alt
                                    className="heart-favorites"
                                />
                                </div>
                                <div className="card add-review two">
                                <div>
                                    <div className="columns-4 w-row">
                                    <div className="column-12 w-col w-col-6">
                                        <div className="div-block-16">
                                        <div className="div-block-15">
                                            <img src="images/user.svg" width={31} alt />
                                        </div>
                                        <div className="text-block-7">
                                            <a href="component/rating.html">
                                            Write a review
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="star-rating-col-2 w-col w-col-6">
                                        <div className="w-form">
                                        <form
                                            id="email-form-2"
                                            name="email-form-2"
                                            data-name="Email Form 2"
                                        >
                                            <div className="star-rating-container">
                                            <div className="rating-section a">
                                                <div className="div-block-10">
                                                <div
                                                    id="slider-1"
                                                    className="html-embed w-embed"
                                                >
                                                    <span className="star-rating star-5">
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        defaultValue={1}
                                                    />
                                                    <i />
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        defaultValue={2}
                                                    />
                                                    <i />
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        defaultValue={3}
                                                    />
                                                    <i />
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        defaultValue={4}
                                                    />
                                                    <i />
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        defaultValue={5}
                                                    />
                                                    <i />
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>
                                            Thank you! Your submission has been received!
                                            </div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>
                                            Oops! Something went wrong while submitting
                                            the form.
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="reviews-populate-container desktop">
                                <div className="data_desktop w-dyn-list">
                                    <div className="w-dyn-items">
                                    <div className="w-dyn-item">
                                        <div className="card">
                                        <div className="w-row">
                                            <div className="w-col w-col-6">
                                            <h5 className="card-name" />
                                            <h6
                                                id="user-rating-review"
                                                className="card-date"
                                            />
                                            <div className="w-embed w-script"></div>
                                            </div>
                                            <div className="column-22 w-col w-col-6">
                                            <div className="verify-badge-container">
                                                <div className="text-block-12">
                                                This user has verified their ticket
                                                purchase
                                                </div>
                                                <img
                                                src="images/check-circle.svg"
                                                alt
                                                className="verified-badge-icon"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <p className="paragraph" />
                                        <div className="helpful-container">
                                            <div className="helpful-text-span">
                                            Did you find this helpful?
                                            </div>
                                            <img
                                            src="images/thumbs_up_blue.svg"
                                            data-w-id="aad2d791-ec65-f10a-38bf-87274936ba2a"
                                            alt
                                            className="helpful-text-button"
                                            />
                                        </div>
                                        <img
                                            src="images/flag.svg"
                                            width={19}
                                            data-w-id="5f0a652e-3622-fdb9-738a-851170644317"
                                            alt
                                            className="flag"
                                        />
                                        </div>
                                        <div className="response">
                                        <p className="conference-response">
                                            This is a sample response from the conference
                                            organizers. These divs will only appear under
                                            reviews that have been replied to.
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="w-dyn-empty">
                                    <div>No items found.</div>
                                    </div>
                                </div>
                                </div>
                                <div className="reviews-populate-container mobile">
                                <div className="data_mobile w-dyn-list">
                                    <div className="w-dyn-items">
                                    <div className="w-dyn-item">
                                        <div className="card">
                                        <div className="columns-6 w-row">
                                            <div className="w-col w-col-6">
                                            <h5 />
                                            <h6 id="user-rating-review" />
                                            <div className="w-embed w-script"></div>
                                            </div>
                                            <div className="w-col w-col-6">
                                            <div className="verify-badge-container">
                                                <div className="text-block-12">
                                                This user has verified their ticket
                                                purchase
                                                </div>
                                                <img
                                                src="images/check-circle.svg"
                                                alt
                                                className="verified-badge-icon"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <p className="paragraph" />
                                        <div className="helpful-container">
                                            <div className="helpful-text-span">
                                            Did you find this helpful?
                                            </div>
                                            <img
                                            src="images/thumbs_up_blue.svg"
                                            data-w-id="df8f09db-37c9-67c3-8dd0-a78966ca4a0a"
                                            alt
                                            className="helpful-text-button"
                                            />
                                        </div>
                                        <img
                                            src="images/flag.svg"
                                            width={19}
                                            data-w-id="178b6d3b-7b7d-6dcd-fd1c-1ecb131a4653"
                                            alt
                                            className="flag"
                                        />
                                        </div>
                                        <div className="response">
                                        <p className="conference-response">
                                            This is a sample response from the conference
                                            organizers. These divs will only appear under
                                            reviews that have been replied to.
                                            <br />
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="w-dyn-empty">
                                    <div>No items found.</div>
                                    </div>
                                </div>
                                </div>
                                <div className="div-block-19">
                                <a
                                    id="review-more-button"
                                    href="#"
                                    className="button-5 w-button"
                                >
                                    Show more reviews
                                </a>
                                </div>
                            </div>
                            <div className="listing-main-col-right w-col w-col-4 w-col-stack">
                                <div className="card favorites large">
                                <h5 className="heading-4">Add to your list?</h5>
                                <img
                                    src="images/heart_correct_v2.svg"
                                    width={45}
                                    data-w-id="efaa2999-8319-ed5c-40c6-918f7b27f434"
                                    style={{ filter: "grayscale(100%)" }}
                                    alt
                                    className="heart-favorites"
                                />
                                </div>
                                <div className="card tickets">
                                <div className="card-title">
                                    <h1 className="card-heading">Tickets</h1>
                                </div>
                                <div className="ticket-container">
                                    <div className="ticket-col w-row">
                                    <div className="event-info w-col w-col-9">
                                        <div className="event-venue">
                                        <span className="event-city">Eventbrite.com</span>
                                        </div>
                                    </div>
                                    <div className="event-purchase w-clearfix w-col w-col-3">
                                        <a href="#" className="button-3 w-button">
                                        Buy
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                <div className="ticket-container">
                                    <div className="ticket-col w-row">
                                    <div className="event-info w-col w-col-9">
                                        <div className="event-venue">Stubhub.com</div>
                                    </div>
                                    <div className="event-purchase w-clearfix w-col w-col-3">
                                        <a href="#" className="button-4 w-button">
                                        Buy
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="card people-of-interest">
                                <div className="card-title">
                                    <h1 className="card-heading">About</h1>
                                </div>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse varius enim in eros elementum tristique.
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                                    nulla, ut commodo diam libero vitae erat. Aenean
                                    faucibus nibh et justo cursus id rutrum lorem imperdiet.
                                    Nunc ut sem vitae risus tristique posuere.
                                </p>
                                </div>
                                <div className="card people-of-interest">
                                <div className="card-title">
                                    <h1 className="card-heading">
                                    Notable people &amp;&nbsp;speakers
                                    </h1>
                                </div>
                                <ol className="list-2">
                                    <li className="notable-people">
                                    <span className="person-span">Richard French</span> -{" "}
                                    <span className="person-career-span">CEO of ABC</span>
                                    </li>
                                    <li className="notable-people">
                                    <span className="person-span">Chris Donahue</span> -{" "}
                                    <span className="person-career-span">CTO of ABC</span>
                                    </li>
                                    <li className="notable-people">
                                    <span className="person-span">John Smith</span> -{" "}
                                    <span className="person-career-span">
                                        Guest&nbsp;Speaker
                                    </span>
                                    </li>
                                </ol>
                                </div>
                                <div className="card contact-information">
                                <div className="card-title">
                                    <h1 className="card-heading">Contact</h1>
                                </div>
                                <div className="event-phone-number-container">
                                    <p>Tel:&nbsp;+1(520) 555-5555</p>
                                </div>
                                <div className="event-email-container">
                                    <p>Email:&nbsp;event@event.com</p>
                                </div>
                                </div>
                                <div className="card events">
                                <div className="card-title">
                                    <h1 className="card-heading">Location information</h1>
                                </div>
                                <ol className="list w-list-unstyled">
                                    <li className="list-item">
                                    <span className="location-date">1/21</span> -{" "}
                                    <span className="location-address-span">
                                        7672 S Freshwater Pearl Dr
                                    </span>
                                    , <span className="location-city-span">Tucson</span>,{" "}
                                    <span className="location-state-span">Az</span>{" "}
                                    <span className="location-zip-span">85747</span>
                                    </li>
                                    <li className="list-item">
                                    <span className="location-date">1/27</span> -{" "}
                                    <span className="location-address-span">
                                        7672 S Freshwater Pearl Dr
                                    </span>
                                    , <span className="location-city-span">Tucson</span>,{" "}
                                    <span className="location-state-span">Az</span>{" "}
                                    <span className="location-zip-span">85747</span>
                                    </li>
                                    <li className="list-item">
                                    <span className="location-date">1/30</span> -{" "}
                                    <span className="location-address-span">
                                        7672 S Freshwater Pearl Dr
                                    </span>
                                    , <span className="location-city-span">Tucson</span>,{" "}
                                    <span className="location-state-span">Az</span>{" "}
                                    <span className="location-zip-span">85747</span>
                                    </li>
                                    <li className="list-item">
                                    <span className="location-date">3/21</span> -{" "}
                                    <span className="location-address-span">
                                        7672 S Freshwater Pearl Dr
                                    </span>
                                    , <span className="location-city-span">Tucson</span>,{" "}
                                    <span className="location-state-span">Az</span>{" "}
                                    <span className="location-zip-span">85747</span>
                                    </li>
                                    <li className="list-item">
                                    <span className="location-date">4/21</span> -{" "}
                                    <span className="location-address-span">
                                        7672 S Freshwater Pearl Dr
                                    </span>
                                    , <span className="location-city-span">Tucson</span>,{" "}
                                    <span className="location-state-span">Az</span>{" "}
                                    <span className="location-zip-span">85747</span>
                                    </li>
                                </ol>
                                </div>
                                <div className="card map">
                                <div className="card-title">
                                    <h1 className="card-heading">Map view</h1>
                                </div>
                                <div className="div-block-2" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        data-w-tab="Tab 2"
                        className="tab-pane-tab-2 w-tab-pane"
                        id="w-tabs-0-data-w-pane-1"
                        role="tabpanel"
                        aria-labelledby="reviews"
                        style={{}}
                        >
                        <div className="card tags">
                            <div className="card-title">
                            <h1 className="card-heading">General information</h1>
                            </div>
                            <div className="tags-container">
                            <div className="tag tech">
                                <div className="tag-category">Tech</div>
                            </div>
                            <div className="tag audience">
                                <div className="tag-reviews">3.3k reviews</div>
                            </div>
                            <div className="tag rating">
                                <div className="tag-rating">3.5 stars</div>
                            </div>
                            </div>
                            <div className="item-graph-details w-form">
                            <form
                                id="email-form-3"
                                name="email-form-3"
                                data-name="Email Form 3"
                                className="item-graph"
                            >
                                <div className="graph-container">
                                <div className="rating-col awesome w-row">
                                    <div className="w-col w-col-2">
                                    <label className="w-checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox-6"
                                        name="checkbox-6"
                                        data-name="Checkbox 6"
                                        className="w-checkbox-input"
                                        />
                                        <span className="w-form-label">Awesome</span>
                                    </label>
                                    </div>
                                    <div className="column-18 w-col w-col-8">
                                    <div className="graph-percentage outer">
                                        <div className="graph-fill-percentage awesome reviews" />
                                    </div>
                                    </div>
                                    <div className="w-col w-col-2">
                                    <div className="element-percentage-span">98%</div>
                                    </div>
                                </div>
                                <div className="rating-col great w-row">
                                    <div className="w-col w-col-2">
                                    <label className="w-checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox-2"
                                        name="checkbox-2"
                                        data-name="Checkbox 2"
                                        className="w-checkbox-input"
                                        />
                                        <span className="w-form-label">Great</span>
                                    </label>
                                    </div>
                                    <div className="column-18 w-col w-col-8">
                                    <div className="graph-percentage outer">
                                        <div className="graph-fill-percentage great reviews" />
                                    </div>
                                    </div>
                                    <div className="w-col w-col-2">
                                    <div className="element-percentage-span">5%</div>
                                    </div>
                                </div>
                                <div className="rating-col average w-row">
                                    <div className="w-col w-col-2">
                                    <label className="w-checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox-3"
                                        name="checkbox-3"
                                        data-name="Checkbox 3"
                                        className="w-checkbox-input"
                                        />
                                        <span className="w-form-label">Average</span>
                                    </label>
                                    </div>
                                    <div className="column-18 w-col w-col-8">
                                    <div className="graph-percentage outer">
                                        <div className="graph-fill-percentage average reviews" />
                                    </div>
                                    </div>
                                    <div className="w-col w-col-2">
                                    <div className="element-percentage-span">3%</div>
                                    </div>
                                </div>
                                <div className="rating-col poor w-row">
                                    <div className="w-col w-col-2">
                                    <label className="w-checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox-4"
                                        name="checkbox-4"
                                        data-name="Checkbox 4"
                                        className="w-checkbox-input"
                                        />
                                        <span className="w-form-label">Poor</span>
                                    </label>
                                    </div>
                                    <div className="column-18 w-col w-col-8">
                                    <div className="graph-percentage outer">
                                        <div className="graph-fill-percentage poor reviews" />
                                    </div>
                                    </div>
                                    <div className="w-col w-col-2">
                                    <div className="element-percentage-span">2%</div>
                                    </div>
                                </div>
                                <div className="rating-col terrible w-row">
                                    <div className="w-col w-col-2">
                                    <label className="w-checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox-5"
                                        name="checkbox-5"
                                        data-name="Checkbox 5"
                                        className="w-checkbox-input"
                                        />
                                        <span className="w-form-label">Terrible</span>
                                    </label>
                                    </div>
                                    <div className="column-18 w-col w-col-8">
                                    <div className="graph-percentage outer">
                                        <div className="graph-fill-percentage terrible reviews" />
                                    </div>
                                    </div>
                                    <div className="w-col w-col-2">
                                    <div className="element-percentage-span">1%</div>
                                    </div>
                                </div>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>
                                Oops! Something went wrong while submitting the form.
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="collection-list-wrapper w-dyn-list">
                            <div className="w-dyn-items">
                            <div className="w-dyn-item">
                                <div className="card">
                                <div className="columns-7 w-row">
                                    <div className="w-col w-col-6">
                                    <h5 />
                                    <h6 id="user-rating-review" />
                                    <div className="w-embed w-script"></div>
                                    </div>
                                    <div className="w-col w-col-6">
                                    <div className="verify-badge-container">
                                        <div className="text-block-12">
                                        This user has verified their ticket purchase
                                        </div>
                                        <img
                                        src="images/check-circle.svg"
                                        alt
                                        className="verified-badge-icon"
                                        />
                                    </div>
                                    </div>
                                </div>
                                <p className="paragraph" />
                                <div className="helpful-container">
                                    <div className="helpful-text-span">
                                    Did you find this helpful?
                                    </div>
                                    <img
                                    src="images/thumbs-up.svg"
                                    alt
                                    className="helpful-text-button"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="w-dyn-empty">
                            <div>No items found.</div>
                            </div>
                            <div className="w-pagination-wrapper pagination">
                            <a href="#" className="w-pagination-previous">
                                <svg
                                className="w-pagination-previous-icon"
                                height="12px"
                                width="12px"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12 12"
                                transform="translate(0, 1)"
                                >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    fillRule="evenodd"
                                    d="M8 10L4 6l4-4"
                                />
                                </svg>
                                <div className="w-inline-block">Previous</div>
                            </a>
                            <a href="#" className="w-pagination-next">
                                <div className="w-inline-block">Next</div>
                                <svg
                                className="w-pagination-next-icon"
                                height="12px"
                                width="12px"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12 12"
                                transform="translate(0, 1)"
                                >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    fillRule="evenodd"
                                    d="M4 2l4 4-4 4"
                                />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div
                        data-w-tab="Tab 3"
                        className="w-tab-pane w--tab-active"
                        id="w-tabs-0-data-w-pane-2"
                        role="tabpanel"
                        aria-labelledby="w-tabs-0-data-w-tab-2"
                        style={{ opacity: 1, transition: "opacity 300ms ease 0s" }}
                        >
                        <div className="pictures-list-container list-item-page">
                            <div className="card picture">
                            <div className="card-title pictures">
                                <h5 className="card-name pictures">Cameron B.</h5>
                                <h5 className="card-date pictures">April 20, 2020</h5>
                                <h1 className="card-picture-conference">
                                <a
                                    href="list-item-page-template.html"
                                    aria-current="page"
                                    className="w--current"
                                >
                                    <span className="conference-id">Abc conference</span>
                                </a>
                                </h1>
                            </div>
                            <div className="card-title pictures">
                                <h1 className="card-heading pictures">
                                This is the title that will accompany the photo posts.
                                </h1>
                            </div>
                            <a href="#" className="w-inline-block w-lightbox">
                                <img
                                src="images/AdobeStock_220693976.jpeg"
                                srcSet="images/AdobeStock_220693976-p-800.jpeg 800w, images/AdobeStock_220693976-p-1600.jpeg 1600w, images/AdobeStock_220693976-p-2000.jpeg 2000w, images/AdobeStock_220693976-p-2600.jpeg 2600w, images/AdobeStock_220693976.jpeg 3000w"
                                sizes="(max-width: 479px) 75vw, (max-width: 767px) 33vw, (max-width: 991px) 253.390625px, 211.890625px"
                                alt
                                />
                            </a>
                            <div className="like-container picture">
                                <div className="helpful-text-span">
                                Do you like this photo?
                                </div>
                                <img
                                src="images/heart_correct_v2.svg"
                                width={40}
                                data-w-id="16c816cd-8690-e6dc-1cb0-f907abb11e2f"
                                style={{ filter: "grayscale(100%)" }}
                                alt
                                className="heart-favorites"
                                />
                            </div>
                            <img
                                src="images/flag.svg"
                                width={19}
                                data-w-id="16c816cd-8690-e6dc-1cb0-f907abb11e30"
                                alt
                                className="flag"
                            />
                            </div>
                            <div className="card picture">
                            <div className="card-title pictures">
                                <h5 className="card-name pictures">Cameron B.</h5>
                                <h5 className="card-date pictures">April 20, 2020</h5>
                                <h1 className="card-picture-conference">
                                <a
                                    href="list-item-page-template.html"
                                    aria-current="page"
                                    className="w--current"
                                >
                                    <span className="conference-id">Abc conference</span>
                                </a>
                                </h1>
                            </div>
                            <div className="card-title pictures">
                                <h1 className="card-heading pictures">
                                This is the title that will accompany the photo posts.
                                </h1>
                            </div>
                            <a href="#" className="w-inline-block w-lightbox">
                                <img
                                src="images/AdobeStock_220693976.jpeg"
                                srcSet="images/AdobeStock_220693976-p-800.jpeg 800w, images/AdobeStock_220693976-p-1600.jpeg 1600w, images/AdobeStock_220693976-p-2000.jpeg 2000w, images/AdobeStock_220693976-p-2600.jpeg 2600w, images/AdobeStock_220693976.jpeg 3000w"
                                sizes="(max-width: 479px) 75vw, (max-width: 767px) 33vw, (max-width: 991px) 253.390625px, 211.890625px"
                                alt
                                />
                            </a>
                            <div className="like-container picture">
                                <div className="helpful-text-span">
                                Do you like this photo?
                                </div>
                                <img
                                src="images/heart_correct_v2.svg"
                                width={40}
                                data-w-id="8a335a26-0c23-7ff3-9858-1b835e6fc218"
                                style={{ filter: "grayscale(100%)" }}
                                alt
                                className="heart-favorites"
                                />
                            </div>
                            <img
                                src="images/flag.svg"
                                width={19}
                                data-w-id="8a335a26-0c23-7ff3-9858-1b835e6fc219"
                                alt
                                className="flag"
                            />
                            </div>
                            <div className="card picture">
                            <div className="card-title pictures">
                                <h5 className="card-name pictures">Cameron B.</h5>
                                <h5 className="card-date pictures">April 20, 2020</h5>
                                <h1 className="card-picture-conference">
                                <a
                                    href="list-item-page-template.html"
                                    aria-current="page"
                                    className="w--current"
                                >
                                    <span className="conference-id">Abc conference</span>
                                </a>
                                </h1>
                            </div>
                            <div className="card-title pictures">
                                <h1 className="card-heading pictures">
                                This is the title that will accompany the photo posts.
                                </h1>
                            </div>
                            <a href="#" className="w-inline-block w-lightbox">
                                <img
                                src="images/AdobeStock_220693976.jpeg"
                                srcSet="images/AdobeStock_220693976-p-800.jpeg 800w, images/AdobeStock_220693976-p-1600.jpeg 1600w, images/AdobeStock_220693976-p-2000.jpeg 2000w, images/AdobeStock_220693976-p-2600.jpeg 2600w, images/AdobeStock_220693976.jpeg 3000w"
                                sizes="(max-width: 479px) 75vw, (max-width: 767px) 33vw, (max-width: 991px) 253.390625px, 211.890625px"
                                alt
                                />
                            </a>
                            <div className="like-container picture">
                                <div className="helpful-text-span">
                                Do you like this photo?
                                </div>
                                <img
                                src="images/heart_correct_v2.svg"
                                width={40}
                                data-w-id="d2f1b29e-fb1f-4f7c-d0db-d5aef0e4360f"
                                style={{ filter: "grayscale(100%)" }}
                                alt
                                className="heart-favorites"
                                />
                            </div>
                            <img
                                src="images/flag.svg"
                                width={19}
                                data-w-id="d2f1b29e-fb1f-4f7c-d0db-d5aef0e43610"
                                alt
                                className="flag"
                            />
                            </div>
                            <div className="card picture">
                            <div className="card-title pictures">
                                <h5 className="card-name pictures">Cameron B.</h5>
                                <h5 className="card-date pictures">April 20, 2020</h5>
                                <h1 className="card-picture-conference">
                                <a
                                    href="list-item-page-template.html"
                                    aria-current="page"
                                    className="w--current"
                                >
                                    <span className="conference-id">Abc conference</span>
                                </a>
                                </h1>
                            </div>
                            <div className="card-title pictures">
                                <h1 className="card-heading pictures">
                                This is the title that will accompany the photo posts.
                                </h1>
                            </div>
                            <a href="#" className="w-inline-block w-lightbox">
                                <img
                                src="images/AdobeStock_220693976.jpeg"
                                srcSet="images/AdobeStock_220693976-p-800.jpeg 800w, images/AdobeStock_220693976-p-1600.jpeg 1600w, images/AdobeStock_220693976-p-2000.jpeg 2000w, images/AdobeStock_220693976-p-2600.jpeg 2600w, images/AdobeStock_220693976.jpeg 3000w"
                                sizes="(max-width: 479px) 75vw, (max-width: 767px) 33vw, (max-width: 991px) 253.390625px, 211.890625px"
                                alt
                                />
                            </a>
                            <div className="like-container picture">
                                <div className="helpful-text-span">
                                Do you like this photo?
                                </div>
                                <img
                                src="images/heart_correct_v2.svg"
                                width={40}
                                data-w-id="813c22e1-1e8c-9d22-e441-e552e9b6593d"
                                style={{ filter: "grayscale(100%)" }}
                                alt
                                className="heart-favorites"
                                />
                            </div>
                            <img
                                src="images/flag.svg"
                                width={19}
                                data-w-id="813c22e1-1e8c-9d22-e441-e552e9b6593e"
                                alt
                                className="flag"
                            />
                            </div>
                            <div className="card picture">
                            <div className="card-title pictures">
                                <h5 className="card-name pictures">Cameron B.</h5>
                                <h5 className="card-date pictures">April 20, 2020</h5>
                                <h1 className="card-picture-conference">
                                <a
                                    href="list-item-page-template.html"
                                    aria-current="page"
                                    className="w--current"
                                >
                                    <span className="conference-id">Abc conference</span>
                                </a>
                                </h1>
                            </div>
                            <div className="card-title pictures">
                                <h1 className="card-heading pictures">
                                This is the title that will accompany the photo posts.
                                </h1>
                            </div>
                            <a href="#" className="w-inline-block w-lightbox">
                                <img
                                src="images/AdobeStock_220693976.jpeg"
                                srcSet="images/AdobeStock_220693976-p-800.jpeg 800w, images/AdobeStock_220693976-p-1600.jpeg 1600w, images/AdobeStock_220693976-p-2000.jpeg 2000w, images/AdobeStock_220693976-p-2600.jpeg 2600w, images/AdobeStock_220693976.jpeg 3000w"
                                sizes="(max-width: 479px) 75vw, (max-width: 767px) 33vw, (max-width: 991px) 253.390625px, 211.890625px"
                                alt
                                />
                            </a>
                            <div className="like-container picture">
                                <div className="helpful-text-span">
                                Do you like this photo?
                                </div>
                                <img
                                src="images/heart_correct_v2.svg"
                                width={40}
                                data-w-id="6089b374-347a-3b6c-a048-71e3aa7bedde"
                                style={{ filter: "grayscale(100%)" }}
                                alt
                                className="heart-favorites"
                                />
                            </div>
                            <img
                                src="images/flag.svg"
                                width={19}
                                data-w-id="6089b374-347a-3b6c-a048-71e3aa7beddf"
                                alt
                                className="flag"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="report-card-container">
                <div className="report card start">
                <img
                    src="images/arrow-left-circle.svg"
                    width={38}
                    data-w-id="86dc92e9-18df-5828-5010-570c566d5d9e"
                    alt
                    className="back-button"
                />
                <div className="card-title">
                    <h1 className="card-heading">Report post?</h1>
                </div>
                <div className="w-form">
                    <form
                    id="wf-form-report-form"
                    name="wf-form-report-form"
                    data-name="report-form"
                    className="w-clearfix"
                    >
                    <label className="w-checkbox card post">
                        <input
                        type="checkbox"
                        id="checkbox-7"
                        name="checkbox-7"
                        data-name="Checkbox 7"
                        className="w-checkbox-input"
                        />
                        <span className="checkbox-label w-form-label">
                        This post is offensive.
                        </span>
                    </label>
                    <label className="w-checkbox card post">
                        <input
                        type="checkbox"
                        id="checkbox-7"
                        name="checkbox-7"
                        data-name="Checkbox 7"
                        className="w-checkbox-input"
                        />
                        <span className="checkbox-label w-form-label">
                        This post encourages violence.
                        </span>
                    </label>
                    <label className="w-checkbox card post">
                        <input
                        type="checkbox"
                        id="checkbox-7"
                        name="checkbox-7"
                        data-name="Checkbox 7"
                        className="w-checkbox-input"
                        />
                        <span className="checkbox-label w-form-label">
                        This post is spam.
                        </span>
                    </label>
                    <label className="w-checkbox card post">
                        <input
                        type="checkbox"
                        id="checkbox-7"
                        name="checkbox-7"
                        data-name="Checkbox 7"
                        className="w-checkbox-input"
                        />
                        <span className="checkbox-label w-form-label">
                        This post is inappropriate.
                        </span>
                    </label>
                    <input
                        type="submit"
                        defaultValue="Submit"
                        data-wait="Please wait..."
                        data-w-id="e28797c6-2011-9236-fa0f-77b969e66f20"
                        className="submit-button w-button"
                    />
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
            <Footer />
            </Layout>
        )
}
export default ConferenceView;
