import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { feedbackCategories } from 'constants';
import { Notification } from './Notification/Notification';

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
    return state.good + state.neutral + state.bad;
  }

  countPositiveFeedbackPercentage(totalFeedback, amountOfGoodFeedback) {
    const result =
      amountOfGoodFeedback / totalFeedback
        ? Math.round((amountOfGoodFeedback / totalFeedback) * 100) + '%'
        : '0%';

    return result;
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackCategories}
            onLeaveFeedback={this.updateStatistics}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback(this.state),
                this.state.good
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
