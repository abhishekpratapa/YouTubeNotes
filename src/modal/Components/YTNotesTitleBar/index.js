import React from 'react';
import './index.module.scss';

import mini_logo from '../../assets/mini_logo.svg';
import back_arrow from '../../assets/back_arrow.svg';

class YTNotesTitleBar extends React.Component {
  renderBackButton() {
    if(this.props.backButton) {
      return (
        <div className={"YTNotesTitleBarBack"}>
          <img src={back_arrow} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"YTNotesTitleBarContainer"}>
        <div className={"YTNotesTitleBar"}>
          <img className={"YTNotesTitleBarImage"}
               src={mini_logo} />
          {this.renderBackButton()}
        </div>
      </div>
    )
  }
}

export default YTNotesTitleBar;