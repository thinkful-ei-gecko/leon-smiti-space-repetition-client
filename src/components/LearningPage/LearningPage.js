import React from 'react';
import './LearningPage.css';
import Flippy from 'react-flippy';
import LanguageApiService from '../../services/language-service'
import GuessCard from '../GuessCard/GuessCard'
//import AnswerCard from '../AnswerCard/AnswerCard'
import { FrontSide, BackSide } from 'react-flippy/dist/FlippyCard';

class LearningPage extends React.Component{
    constructor(){
        super()
        this.state = {
            isFlipped:false,
            word:'',
            totalScore: 0,
            answering: true,
            correct: 0,
            incorrect: 0,
        }
        this.userInput = React.createRef()
    }

    async componentDidMount() {
        const word = await LanguageApiService.fetchWordHead()
        console.log(word)
        this.setState({ 
            word: word.nextWord, 
            correct: word.wordCorrectCount, 
            totalScore: word.totalScore,
            incorrect: word.wordIncorrectCount 
        })
    }
    
    handleNextQuestion = (ev) => {
        ev.preventDefault()
        this.setState({
            isFlipped:!this.state.isFlipped,
            word: this.state.newWord,
            answering: true,
        })
    }

    handleSubmitAnswer = async(ev) => {
        ev.preventDefault()
        const { answering } = this.state
        if (answering) {
            const guess = this.userInput.current.value
            const results = await LanguageApiService.submitAnswer({
                guess
            })
            this.setState({ 
                isFlipped:!this.state.isFlipped, 
                answering: false,
                correct: results.wordCorrectCount,
                incorrect: results.wordIncorrectCount,
                newWord: results.nextWord
            })
            this.userInput.current.value = ''
        }
    }

    render(){
        const { word, correct, incorrect} = this.state
        return (
            <div className="card-container">
                <Flippy
                flipDirection="horizontal"
                flipOnClick={false}
                isFlipped={this.state.isFlipped}
                className="flippy-card-container"
                >
                    <FrontSide>
                    <GuessCard               
                        word={word}
                        correct={correct}
                        incorrect={incorrect}
                        inputValue={this.userInput}
                        totalScore={this.state.totalScore}
                       
                        handleSubmitAnswer={this.handleSubmitAnswer}
                    />
                    </FrontSide>
                    <BackSide>
                        Back
                    {/* <AnswerCard
                        word={word}
                        correct={this.state.correct}
                        incorrect={this.state.incorrect}
                        totalScore={this.state.totalScore}
                        handleNextQuestion={this.handleNextQuestion}
                    /> */}
                    </BackSide>
                </Flippy>
           </div>
        )
    }

}
export default LearningPage