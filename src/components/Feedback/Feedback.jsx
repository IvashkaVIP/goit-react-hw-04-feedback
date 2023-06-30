import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodBtn = () => {
      this.setState({ good: 10 });
      console.log('good');
  };
    handleNeutralBtn = () => {
      this.setState({ neutral: 20 });
    console.log('neutral');
  };
    handleBadBtn = () => {
      this.setState({ bad: 30 });
    console.log('bad');
  };

  render() {
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
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
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
