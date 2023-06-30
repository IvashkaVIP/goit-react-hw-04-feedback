import React from 'react';
import { Statistics } from './Statistics';

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

    render() {
        let total = this.state.good + this.state.neutral + this.state.bad;
        let interest;
        if (!total) interest = "0%"; else interest = (this.state.good / total * 100).toFixed(0)+"%";

       return (
      <>
        <h2>Please leave feedback</h2>
        <div className="btn-wrap">
          <button type="button" onClick={this.handleGoodBtn}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralBtn}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadBtn}>
            Bad
          </button>
               </div>
        
               <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={interest}/>

        {/* <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {interest}</p> */}
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
