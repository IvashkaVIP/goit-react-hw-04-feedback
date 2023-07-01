import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

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
  };
  handleNeutralBtn = () => {
    this.setState(prevState => {
      return { neutral: ++prevState.neutral };
    });
  };
  handleBadBtn = () => {
    this.setState(prevState => {
      return { bad: ++prevState.bad };
    });
  };

  countTotalFeedback() {
    const ref = this.state;
    return ref.good + ref.neutral + ref.bad;
  }
  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    return !total ? '0%' : ((this.state.good / total) * 100).toFixed(0) + '%';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleGoodBtn}
            onNeutral={this.handleNeutralBtn}
            onBad={this.handleBadBtn}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
