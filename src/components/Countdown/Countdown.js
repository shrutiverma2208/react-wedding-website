import React from "react";
import "./Countdown.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours:0,
      minutes:0,
      seconds:0
    };
  }

  weddingTime = new Date(2024, 10, 25, 12, 0);

  componentWillMount() {
    this.getTimeUntil();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTimeUntil(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeUntil = () => {
    const currentTime = new Date();
    const weddingTime = new Date(2024, 10, 25, 12, 0);
    const timeUntil = weddingTime - currentTime;

    const seconds = Math.floor((timeUntil / 1000) % 60);
    const minutes = Math.floor((timeUntil / 1000 / 60) % 60);
    const hours = Math.floor((timeUntil / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    this.setState({ days,hours,minutes,seconds });
  };

  render() {
    return (
      <div id="countdown">
        <span>{this.state.days} Days</span>
        <span>{this.state.hours} Hours</span>
        <span>{this.state.minutes} Minutes</span>
        <span>{this.state.seconds} Seconds</span>

        <span id="ido"> until </span>
        <span id="ido"> Together </span>
      </div>
    );
  }
}

export default Countdown;
