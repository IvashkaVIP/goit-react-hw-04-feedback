import React from "react";


export class Feedback extends React.Component {
  handleGoodBtn() { console.log('good')}
  handleNeutralBtn() {console.log('neutral')}
  handleBadBtn() {console.log('bad')}

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="btn-wrap">
          <button type="button" onClick={this.handleGoodBtn}>Good</button>
          <button type="button" onClick={this.handleNeutralBtn}>Neutral</button>
          <button type="button" onClick={this.handleBadBtn}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
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