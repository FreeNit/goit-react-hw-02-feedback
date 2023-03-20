import { Component } from 'react';
import PropTypes from 'prop-types';

import { feedbackCategories } from 'constants';

export class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  updateStatistics = category => {
    this.setState(prevState => {
      return { [category]: prevState[category] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
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
      <div>
        <div>
          <h3>Please leave feedback</h3>
          <div>
            <button
              onClick={() => {
                this.updateStatistics(feedbackCategories.good);
              }}
            >
              Good
            </button>
            <button
              onClick={() => {
                this.updateStatistics(feedbackCategories.neutral);
              }}
            >
              Neutral
            </button>
            <button
              onClick={() => {
                this.updateStatistics(feedbackCategories.bad);
              }}
            >
              Bad
            </button>
          </div>
        </div>
        <div>
          <h3>Statistics</h3>
          <ul>
            <li>
              <span>Good:</span>
              <span>{this.state.good}</span>
            </li>
            <li>
              <span>Neutral:</span>
              <span>{this.state.neutral}</span>
            </li>
            <li>
              <span>Bad:</span>
              <span>{this.state.bad}</span>
            </li>
            <li>
              <span>Total:</span>
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              <span>Positive feedback:</span>
              <span>
                {this.countPositiveFeedbackPercentage(
                  this.countTotalFeedback(),
                  this.state.good
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
