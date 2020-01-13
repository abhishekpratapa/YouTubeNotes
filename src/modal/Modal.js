import React from 'react';
import './Modal.css';

import YTNotesbutton from './Components/YTNotesbutton';

class Modal extends React.Component {
  render() {
    return (
      <div className={"Modal"}>
        <YTNotesbutton text={"Start"}/>
      </div>
    );
  }
}

export default Modal;