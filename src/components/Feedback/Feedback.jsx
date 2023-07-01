import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

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
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleGoodBtn}
            onNeutral={this.handleNeutralBtn}
            onBad={this.handleBadBtn}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

