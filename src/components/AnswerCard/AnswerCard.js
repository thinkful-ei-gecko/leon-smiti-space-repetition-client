import React, { Component } from 'react'
import './AnswerCard.css'

class AnswerCard extends Component {
  render() {
    const { correct, totalScore, word, handleNextQuestion } = this.props
    return (
        <div className="results-container">
            <h1 className="description">
                {correct
                ? `Good job! You answered correctly.`
                : `Sorry, you answered incorrectly.`}
            </h1>
            {!answer}
            <h3>{`The correct translation of ${word} is ${answer}`}</h3>
            <div className="results-info">
                <p>{`Total score: ${totalScore}`}</p>
            </div>  
            <button type="button" className="next stylish-btn" onClick={handleNextQuestion}>
            Move to the Next Question
            </button>                  
        </div>
    )
  }
}

export default AnswerCard
