import React from 'react';
import './index.module.scss';

import YTNotesTimingPill from '../YTNotesTimingPill';

class YTNotesTimingElement extends React.Component {
  render() {
    return (
      <div className={"YTNotesTimingElement"}>
        <div className={"YTNotesTimingPillContainer"}>
          <YTNotesTimingPill time={this.props.time}
                             onClick={this.props.onClick.bind(this)}/>
        </div>
        <div className={"YTNotesTimingText"}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default YTNotesTimingElement;