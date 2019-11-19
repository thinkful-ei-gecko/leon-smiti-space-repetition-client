import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PracticeWordsList from '../../components/PracticeWordsList/PracticeWordsList';
import UserContext from '../../contexts/UserContext'
import './DashboardRoute.css';

class DashboardRoute extends Component {
  



  render() {
   

    return (

      <section className="dashboard">
        <h2>{language}</h2>
        <Link to={'/learn'}><button className="dash-button">Start practice</button></Link>
        <div className="divider"></div>
        <PracticeWordsList  />
      </section>
    );
  }
}

export default DashboardRoute
