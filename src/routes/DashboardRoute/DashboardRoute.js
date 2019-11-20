import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'
import LanguageApiService from '../../services/language-service';
import './DashboardRoute.css';

class DashboardRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsDisplay: [],
      language: '',
      totalScore: 0,
    }
  }
  
  wordTableVocabularyWord(word, correctGuesses, incorrectGuesses) {
    correctGuesses = (correctGuesses) ? correctGuesses : '0';
    incorrectGuesses = (incorrectGuesses) ? incorrectGuesses: '0';
    return  <li className="word-table-row" key={word}>
    <h4 className="flex">{word}</h4>
      <div className="even-space">
        <h5 className="flex correct-legend">correct answer count: {correctGuesses}</h5>
        <h5 className="flex incorrect-legend">incorrect answer count: {incorrectGuesses}</h5>
      </div>
  </li>;
  }

  async renderPracticeWordList() {
    await LanguageApiService.fetchWords()
      .then(res => {
        UserContext.words = res.words;
        UserContext.language = res.language.name;
  
      })

      .catch(res => {
        this.setState({ error: res.error })
      });
      let language = UserContext.language;
    let words = UserContext.words || [];

    this.setState(
      {
      language: language,
      wordsDisplay: words.map(word => {
      let mapped = this.wordTableVocabularyWord(word.original, word.correct_count, word.incorrect_count);
      return mapped;
    })});
  }

  async componentDidMount() {
    this.renderPracticeWordList();
    const word = await LanguageApiService.fetchWordHead();
    if(this.state.totalScore === 0){
      this.setState({
        totalScore: word.totalScore
      })
      
    }
    
  }



  render() {

    return (
     
      <section className="dashboard">
        <h2>{this.state.language}</h2>
        <Link to={'/learn'}><button className="dash-button">Start practice</button></Link>
        <h2>Total correct answers: {this.state.totalScore}</h2>
        <div className="PracticeWordsList">
        <h3>Words to Practice</h3>
        <div className="word-table">
          <ul className="word-card">
            {this.state.wordsDisplay}
          </ul>
        </div>
      </div>
      </section>
    );
  }
}

export default DashboardRoute
