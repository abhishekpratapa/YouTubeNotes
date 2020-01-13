import React from 'react';
import './Modal.css';

import YTNotesbutton from './Components/YTNotesbutton';

class Modal extends React.Component {
  doNothing() {

  }

  render() {
    return (
      <div className={"Modal"}>
        <YTNotesbutton text={"Start"}
                       onClick={this.doNothing.bind(this)}/>
      </div>
    );
  }
}

export default Modal;