import React from 'react';
import'./index.module.scss';

class YTNotesButton extends React.Component {
  render() {
    return (
      <div className={"YTNotesButton"}
           onClick={this.props.onClick.bind(this)}>
        {this.props.text}
      </div>
    )
  }
}

export default YTNotesButton;