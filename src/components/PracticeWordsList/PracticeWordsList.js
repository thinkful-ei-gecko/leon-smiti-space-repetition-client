import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service';
import UserContext from '../../contexts/UserContext'

class PracticeWordsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsDisplay: []
    }
  }

  wordTableVocabularyWord(word, correctGuesses, incorrectGuesses) {
    let correctGuesses = (correctGuesses) ? correctGuesses : '0';
    let incorrectGuesses = (incorrectGuesses) ? incorrectGuesses: '0';
    return  <li className="word-table-row">
    <h5 className="flex">{word}</h5>
      <div className="even-space">
        <h5 className="flex correct-legend">{correctGuesses}</h5>
        <h5 className="flex incorrect-legend">{incorrectGuesses}</h5>
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
          <div className="word-table-row">
            <h5 className="flex">Word</h5>
            <h5>Guess Count</h5>
          </div>
          <div className="word-table-row">
            <h5 className="flex"> </h5>
            <div className="even-space">
              <h5 className="flex correct-legend">Correct</h5>
              <h5 className="flex incorrect-legend">Incorrect</h5>
            </div>
          </div>
        <ul>
          {this.state.wordsDisplay}
        </ul>
        </div>
      </div>
    );
  }
}

export default PracticeWordsList;