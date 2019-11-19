import React, { Component } from 'react'
import './GuessCard.css'

class GuessCard extends Component {
  render() {
    const { word, correct, incorrect, totalScore, inputValue, handleSubmitAnswer } = this.props
    return (

        <div className="Word-Container">
          <h2>Translate the word:</h2>
          <span>{word}</span>
          {!word}
          <p>{`Your total score is: ${totalScore}`}</p>
          <p className="Correct-Count">{`You have answered this word correctly ${correct} times.`}</p>
          <p className="Incorrect-Count">{`You have answered this word incorrectly ${incorrect} times.`}</p>
          <form id="User-Guess" onSubmit={handleSubmitAnswer}>
              <label htmlFor="learn-guess-input">
                What's the translation for this word?
                <input type="text" name="learn-guess-input" id="learn-guess-input" ref={inputValue} required/>
              </label>
              <button type="submit" className="Submit-Btn stylish-btn">Submit your answer</button>
          </form>
        </div> 
    )
  }
}

export default GuessCard