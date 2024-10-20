import React from "react";
import "./AboutUs.css";
//handling the translations
import bride from "./bride.jpg"
import groom from "./groom.webp"

class AboutUs extends React.Component {
  render() {
    return (
      <div className="section" id="aboutUs">
        <h2 className="contactus">
          {this.props.t("contactus.title", {
            framework: "react-i18next"
          })}
        </h2>
        
        <p className="moreinfo">
          {this.props.t("contactus.summary", {
            framework: "react-i18next"
          })}{" "}
          <br/>
          <span>
            
          </span>
          <br/>
        
            
            
          
        </p>
        <hr />
        <div id="brideandgroom">
          <div id="bride">
            <img
              alt="Rossella profile"
              title="Rossella profile"
              className="profilePicture"
              src={bride}
            />
            <p className="moreinfo">
              {this.props.t("contactus.bridesummary", {
                framework: "react-i18next"
              })}
            </p>
          </div>
          <div id="groom">
            <img
              title="Antonio profile"
              alt="Antonio profile"
              className="profilePicture"
              src={groom}
            />
            <p className="moreinfo">
              {this.props.t("contactus.groomsummary", {
                framework: "react-i18next"
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
