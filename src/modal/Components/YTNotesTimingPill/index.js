import React from 'react';
import './index.module.scss';

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

class YTNotesTimingPill extends React.Component {
  renderTime() {
    const digit = Number(this.props.time);
    
    const hours = Math.floor(digit / 3600);
    const minutes = Math.floor(digit % 3600 / 60);
    const seconds = Math.floor(digit % 3600 % 60);

    var hoursDisplay = hours > 0 ? (hours + ":") : "";
    var minutesDisplay = minutes > 0 ? (minutes + ":") : "";
    var secondsDisplay = seconds > 0 ? seconds : "";

    if(minutesDisplay != "") {
      secondsDisplay = pad(secondsDisplay, 2);
    }
    
    if(hoursDisplay != "") {
      minutesDisplay = pad(minutesDisplay, 2);
    }
    
    return hoursDisplay + minutesDisplay + secondsDisplay; 
  }

  render() {
    return (
      <div className={"YTNotesTimingPill"}
             onClick={this.props.onClick.bind(this)}>
        {this.renderTime()}
      </div>
    )
  }
}

export default YTNotesTimingPill;