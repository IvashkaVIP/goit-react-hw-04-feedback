import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodBtn = () => {
    this.setState(prevState => {
      return { good: ++prevState.good };
    });

    console.log('good');
  };
  handleNeutralBtn = () => {
    this.setState(prevState => {
      return { neutral: ++prevState.neutral };
    });
    console.log('neutral');
  };
  handleBadBtn = () => {
    this.setState(prevState => {
      return { bad: ++prevState.bad };
    });
    console.log('bad');
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    return !total ? '0%' : ((this.state.good / total) * 100).toFixed(0) + '%';
  }

  render() {
    return (
      <>
        <FeedbackOptions
          onGood={this.handleGoodBtn}
          onNeutral={this.handleNeutralBtn}
          onBad={this.handleBadBtn}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

        </>
    );
  }
}

// export const Feedback = ({ }) => {
//     return (
//       <>
//         <h2>Please leave feedback</h2>
//         <div className="btn-wrap">
//           <button type="button">Good</button>
//           <button type="button">Neutral</button>
//           <button type="button">Bad</button>
//         </div>
//         <h2>Statistics</h2>
//         <p>Good: </p>
//         <p>Neutral: </p>
//         <p>Bad: </p>
//       </>
//     );}
