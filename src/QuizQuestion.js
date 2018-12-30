import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
        this.setState({ incorrectAnswer: false })
        this.props.showNextQuestionHandler()
      } else {
        this.setState({ incorrectAnswer: true })
      }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer, index) => {
              return <QuizQuestionButton button_text={answer} key={index} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
