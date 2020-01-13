import React from 'react';
import './Modal.css';

import YTNotesbutton from './Components/YTNotesbutton';
import YTNotesTimingPill from './Components/YTNotesTimingPill';
import YTNotesTimingElement from './Components/YTNotesTimingElement';
import YTNotesTitleBar from './Components/YTNotesTitleBar';
class Modal extends React.Component {
  doNothing() {

  }

  render() {
    return (
      <div className={"Modal"}>
        <YTNotesTitleBar backButton={this.doNothing.bind(this)}/>
      </div>
    );
  }
}

export default Modal;

      /*

        <YTNotesbutton text={"Start"}
                       onClick={this.doNothing.bind(this)}/>

        <YTNotesTimingPill onClick={this.doNothing.bind(this)}
                           time={67}/>

        <YTNotesTimingElement onClick={this.doNothing.bind(this)}
                              time={67}
                              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
        <YTNotesTimingElement onClick={this.doNothing.bind(this)}
                              time={67}
                              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
      */