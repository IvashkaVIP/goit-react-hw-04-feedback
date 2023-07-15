import { useState } from "react";
import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import css from './App.module.css'


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   
  const onLeaveFeedBack = (evt, btnName) => {
    console.log('Click on Btn');
  };

  
  // onLeaveFeedBack = (evt, btnName) => {
  //    this.setState(prevState => ({
  //      [btnName]: ++prevState[btnName],
  //    }));
  //  };


  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedBack={onLeaveFeedBack}
        />
        <h1>
          {good} {neutral} {bad}
        </h1>
      </Section>
    </div>
  );

}
//-------------------------------------------------------------------------
export class OldApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = (evt, btnName) => {
    this.setState(prevState => ({
      [btnName]: ++prevState[btnName],
    }));
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
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedBack={this.onLeaveFeedBack}
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
      </div>
    );
  }
}
