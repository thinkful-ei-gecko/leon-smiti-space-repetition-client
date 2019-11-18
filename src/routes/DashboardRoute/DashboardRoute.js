import React, { Component } from 'react';
import PracticeWordsList from '../../components/PracticeWordsList/PracticeWordsList';

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <h2>Spanish</h2>
        <button className="bigButton">Start practicing!</button>
        <div className="divider"></div>
        <PracticeWordsList />
      </section>
    );
  }
}

export default DashboardRoute
