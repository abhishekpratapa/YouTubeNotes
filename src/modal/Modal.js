import React from 'react';
import './Modal.css';

import YTNotesbutton from './Components/YTNotesbutton';
import YTNotesTimingPill from './Components/YTNotesTimingPill';

class Modal extends React.Component {
  doNothing() {

  }

  render() {
    return (
      <div className={"Modal"}>
        <YTNotesbutton text={"Start"}
                       onClick={this.doNothing.bind(this)}/>

        <YTNotesTimingPill onClick={this.doNothing.bind(this)}
                           time={67}/>
      </div>
    );
  }
}

export default Modal;