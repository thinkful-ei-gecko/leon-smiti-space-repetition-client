import React, { Component } from 'react';
import PracticeWordsList from '../../components/PracticeWordsList/PracticeWordsList';
import './DashboardRoute.css';

class DashboardRoute extends Component {
  render() {
    return (
      <section className="dashboard">
        <h2>Spanish</h2>
        <button className="dash-button">Start practice</button>
        <div className="divider"></div>
        <PracticeWordsList />
      </section>
    );
  }
}

export default DashboardRoute
