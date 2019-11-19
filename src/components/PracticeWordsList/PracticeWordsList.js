import React, { Component } from 'react'

import './PracticeWordsList.css';

class PracticeWordsList extends Component {

  render() {
    return(
      <div className="PracticeWordsList">
        <h3>Words to Practice</h3>
        <div className="word-table">
          <ul className="word-card">
            {this.state.wordsDisplay}
          </ul>
        </div>
      </div>
    );
  }
}

export default PracticeWordsList;