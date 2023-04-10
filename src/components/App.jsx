import { useState } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { feedbackCategories } from 'constants';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBade] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const updateStatistics = category => {
    console.log(category);

    switch (category) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBade(bad + 1);
        break;
      default:
        throw Error('There is no such variant');
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (
    totalFeedback,
    amountOfGoodFeedback
  ) => {
    const result =
      amountOfGoodFeedback / totalFeedback
        ? Math.round((amountOfGoodFeedback / totalFeedback) * 100) + '%'
        : '0%';

    return result;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackCategories}
          onLeaveFeedback={updateStatistics}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(good, neutral, bad) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              countTotalFeedback(good, neutral, bad),
              good
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
};
