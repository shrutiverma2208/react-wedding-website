import React from "react";
import "./Hero.css";
import Countdown from "../Countdown/Countdown";
import Video from "../videooo/Video";
class Hero extends React.Component {
  render() {
    return (
      <>
       <div>
        <Video/>
      </div>
      <section className="header" id="hero">
         
        <Countdown />
        <div id="tagline">
          <h1>Shruti & Rahul</h1>
          <h3>
            {this.props.t("hero.weddingwebsite", {
              framework: "react-i18next"
            })}
          </h3>
          <h3>
            {this.props.t("hero.locationwedding", {
              framework: "react-i18next"
            })}
          </h3>
        </div>
        
      </section>
     
      </>
    );
  }
}

export default Hero;
