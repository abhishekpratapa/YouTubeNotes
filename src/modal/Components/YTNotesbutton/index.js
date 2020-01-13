import React from 'react';
import'./index.module.scss';

class YTNotesbutton extends React.Component {
  render() {
    return (
      <div className={"YTNotesbutton"}>
        {this.props.text}
      </div>
    )
  }
}

export default YTNotesbutton;