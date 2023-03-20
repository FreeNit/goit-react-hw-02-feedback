import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistics = category => {
    this.setState(prevState => {
      return { [category]: prevState[category] + 1 };
    });
  };

  countTotalFeedback(state) {
    console.log(state);
    return state.good + state.neutral + state.bad;
  }

  countPositiveFeedbackPercentage(totalFeedback, amountOfGoodFeedback) {
    const result =
      amountOfGoodFeedback / totalFeedback
        ? Math.round((amountOfGoodFeedback / totalFeedback) * 100) + '%'
        : '0%';

    return result;

    console.log(result);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Statistics
          updateStatistics={this.updateStatistics}
          state={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
