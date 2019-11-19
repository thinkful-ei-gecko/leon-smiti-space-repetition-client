import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service';
import UserContext from '../../contexts/UserContext'
import './PracticeWordsList.css';

class PracticeWordsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsDisplay: []
    }
  }

  wordTableVocabularyWord(word, correctGuesses, incorrectGuesses) {
    correctGuesses = (correctGuesses) ? correctGuesses : '0';
    incorrectGuesses = (incorrectGuesses) ? incorrectGuesses: '0';
    return  <li className="word-table-row">
    <h5 className="flex">{word}</h5>
      <div className="even-space">
        <h5 className="flex correct-legend">Correct : {correctGuesses}</h5>
        <h5 className="flex incorrect-legend">Incorrect: {incorrectGuesses}</h5>
      </div>
  </li>;
  }

  async renderPracticeWordList() {
    await LanguageApiService.fetchWords()
      .then(res => {
        UserContext.words = res.words;
      })
      .catch(res => {
        this.setState({ error: res.error })
      });
    let words = UserContext.words || [];
    this.setState({wordsDisplay: words.map(word => {
      let mapped = this.wordTableVocabularyWord(word.original, word.correct_count, word.incorrect_count);
      console.log(mapped);
      return mapped;
    })});
  }

  componentDidMount() {
    this.renderPracticeWordList();
  }

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