import React from 'react';
function AccountInformation(props){
        return(
            <div className="body-wrapper">
            <div className="b2b-container-account-info">
                <div className="b2b-container-account-information">
                <div className="onboarding-col-info w-row">
                    <div className="column-27 w-col w-col-8 w-col-small-small-stack">
                    <div className="card information">
                        <div className="w-form">
                        <form
                            id="email-form"
                            name="email-form"
                            data-name="Email Form"
                            className="form-information w-clearfix"
                        >
                            <div className="form-first-half">
                            <label htmlFor="Profile-name">Display name</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Profile-name"
                                data-name="Profile Name"
                                placeholder="Enter your conference name"
                                id="Profile-name"
                            />
                            <label htmlFor="Website">Company website</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Website"
                                data-name="Website"
                                placeholder="Enter company website"
                                id="Website"
                                required
                            />
                            <label htmlFor="Website">Write an about section</label>
                            <textarea
                                placeholder="Let people know what you're about."
                                maxLength={5000}
                                id="field"
                                name="field"
                                data-name="Field"
                                className="claim-form text w-input"
                                defaultValue={""}
                            />
                            <label htmlFor="Business-phone">Business phone</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Business-phone"
                                data-name="Business Phone"
                                placeholder="Enter company website"
                                id="Business-phone"
                                required
                            />
                            <label htmlFor="Website">Business email</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Website-3"
                                data-name="Website 3"
                                placeholder="Enter company website"
                                id="Website-3"
                                required
                            />
                            <label htmlFor="Mailing-Address">
                                Business street address
                            </label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Mailing-Address"
                                data-name="Mailing Address"
                                id="Mailing-Address"
                                required
                            />
                            <label htmlFor="City">Business city location</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="City"
                                data-name="City"
                                id="City"
                                required
                            />
                            <label htmlFor="Zipcode">Business zipcode</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Zipcode"
                                data-name="Zipcode"
                                id="Zipcode"
                                required
                            />
                            </div>
                            <div className="form-second-half">
                            <div className="recommended-speakers-col w-row">
                                <div className="w-col w-col-11">
                                <p>
                                    We recommend having at least three notable speakers or
                                    people in your list. You can add up to five.
                                </p>
                                </div>
                                <div className="w-col w-col-1">
                                <img
                                    src="../../images/plus-circle.svg"
                                    width={30}
                                    data-w-id="703740ed-d7b5-fd8d-55c2-2fd6363b8932"
                                
                                    className="add-speaker"
                                />
                                </div>
                            </div>
                            <div className="positions _1 w-row">
                                <div className="w-col w-col-6">
                                <label htmlFor="Person">Notable speaker or person</label>
                                <input
                                    type="text"
                                    className="claim-form speaker w-input"
                                    maxLength={256}
                                    name="Person"
                                    data-name="Person"
                                    placeholder="Bill Gates"
                                    id="Person"
                                />
                                </div>
                                <div className="w-col w-col-6">
                                <label htmlFor="Zipcode">Position</label>
                                <input
                                    type="text"
                                    className="claim-form founder w-input"
                                    maxLength={256}
                                    name="Zipcode-3"
                                    data-name="Zipcode 3"
                                    placeholder="Founder "
                                    id="Zipcode-3"
                                />
                                </div>
                            </div>
                            <div className="positions _2 w-row">
                                <div className="w-col w-col-6">
                                <label htmlFor="Person">Notable speaker or person</label>
                                <input
                                    type="text"
                                    className="claim-form speaker w-input"
                                    maxLength={256}
                                    name="Person"
                                    data-name="Person"
                                    placeholder="Satya Nadella"
                                    id="Person"
                                />
                                </div>
                                <div className="w-col w-col-6">
                                <label htmlFor="Position">Position</label>
                                <input
                                    type="text"
                                    className="claim-form founder w-input"
                                    maxLength={256}
                                    name="Position"
                                    data-name="Position"
                                    placeholder="CEO"
                                    id="Position"
                                />
                                </div>
                            </div>
                            <div className="positions _3 w-row">
                                <div className="w-col w-col-6">
                                <label htmlFor="Person-2">
                                    Notable speaker or person
                                </label>
                                <input
                                    type="text"
                                    className="claim-form speaker w-input"
                                    maxLength={256}
                                    name="Person-2"
                                    data-name="Person 2"
                                    placeholder="Kevin Scott"
                                    id="Person-2"
                                />
                                </div>
                                <div className="w-col w-col-6">
                                <label htmlFor="Position">Position</label>
                                <input
                                    type="text"
                                    className="claim-form founder w-input"
                                    maxLength={256}
                                    name="Position"
                                    data-name="Position"
                                    placeholder="CTO"
                                    id="Position"
                                />
                                </div>
                            </div>
                            <div className="positions _4 w-row">
                                <div className="w-col w-col-6">
                                <label htmlFor="Person-3">
                                    Notable speaker or person
                                </label>
                                <input
                                    type="text"
                                    className="claim-form speaker w-input"
                                    maxLength={256}
                                    name="Person-5"
                                    data-name="Person 5"
                                    placeholder="Kevin Scott"
                                    id="Person-5"
                                />
                                </div>
                                <div className="w-col w-col-6">
                                <label htmlFor="Position-2">Position</label>
                                <input
                                    type="text"
                                    className="claim-form founder w-input"
                                    maxLength={256}
                                    name="Position-4"
                                    data-name="Position 4"
                                    placeholder="CTO"
                                    id="Position-4"
                                />
                                </div>
                            </div>
                            <div className="positions _5 w-row">
                                <div className="w-col w-col-6">
                                <label htmlFor="Person-3">
                                    Notable speaker or person
                                </label>
                                <input
                                    type="text"
                                    className="claim-form speaker w-input"
                                    maxLength={256}
                                    name="Person-4"
                                    data-name="Person 4"
                                    placeholder="Kevin Scott"
                                    id="Person-4"
                                />
                                </div>
                                <div className="w-col w-col-6">
                                <label htmlFor="Position-2">Position</label>
                                <input
                                    type="text"
                                    className="claim-form founder w-input"
                                    maxLength={256}
                                    name="Position-3"
                                    data-name="Position 3"
                                    placeholder="CTO"
                                    id="Position-3"
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
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Facebook-link"
                                data-name="Facebook Link"
                                placeholder="Facebook  link"
                                id="Facebook-link"
                            />
                            <label htmlFor="Twitter-link">Twitter link</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Twitter-link"
                                data-name="Twitter Link"
                                placeholder="Twitter link"
                                id="Twitter-link"
                            />
                            <label htmlFor="Instagram-link">Instagram link</label>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Instagram-link"
                                data-name="Instagram Link"
                                placeholder="Instagram link"
                                id="Instagram-link"
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
                                    You can add your event locations, dates, and times, on
                                    the next page.{" "}
                                </p>
                                </div>
                                <div className="column-31 w-col w-col-1" />
                            </div>
                            <label htmlFor="Person-3">Organization ID</label>
                            <p>
                                If you have an organization ID from any of the listed
                                affiliates below, please enter it below.{" "}
                            </p>
                            <input
                                type="text"
                                className="claim-form w-input"
                                maxLength={256}
                                name="Organization-ID"
                                data-name="Organization ID"
                                placeholder="Organization ID"
                                id="Organization-ID"
                            />
                            </div>
                            <input
                            type="submit"
                            defaultValue="Next"
                            data-wait="Please wait..."
                            className="submit-button-4 w-button"
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
                    <div className="column-28 w-col w-col-4 w-col-small-small-stack">
                    <img src="../../images/mock.jpg" width={278} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
}
export default AccountInformation;