import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <div className="w-container">
              <div className="footer-flex-container">
                <div>
                  <h2 className="footer-heading">Heading Label</h2>
                  <ul className="list-3 w-list-unstyled">
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="footer-heading">Heading Label</h2>
                  <ul className="w-list-unstyled">
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="footer-heading">Heading Label</h2>
                  <ul className="w-list-unstyled">
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                    <li><a href="#" className="footer-link">Text Link</a></li>
                  </ul>
                </div>
              </div>
              <div className="text-block-10">Copyright © 2020 My Company. All rights reserved.</div>
            </div>
          </div>

        )
    }
}
export default Footer;