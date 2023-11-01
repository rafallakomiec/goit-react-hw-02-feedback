import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return (good / total) * 100;
  };

  addGood = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };
  addNeutral = () => {
    this.setState(state => {
      return { neutral: state.neutral + 1 };
    });
  };
  addBad = () => {
    this.setState(state => {
      return { bad: state.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedback = Math.round(this.countPositiveFeedbackPercentage(good, total));

    return (
      <>
        <section>
          <h1>Please leave us feedback:</h1>
          <button type="button" onClick={this.addGood}>
            Good
          </button>
          <button type="button" onClick={this.addNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.addBad}>
            Bad
          </button>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
          </ul>
        </section>
      </>
    );
  }
}

export default App;
