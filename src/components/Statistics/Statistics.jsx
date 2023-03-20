import { feedbackCategories } from 'constants';

export const Statistics = ({
  updateStatistics,
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  // console.log(state);

  return (
    <div>
      <div>
        <h3>Please leave feedback</h3>
        <div>
          <button
            onClick={() => {
              updateStatistics(feedbackCategories.good);
            }}
          >
            Good
          </button>
          <button
            onClick={() => {
              updateStatistics(feedbackCategories.neutral);
            }}
          >
            Neutral
          </button>
          <button
            onClick={() => {
              updateStatistics(feedbackCategories.bad);
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
            <span>{state.good}</span>
          </li>
          <li>
            <span>Neutral:</span>
            <span>{state.neutral}</span>
          </li>
          <li>
            <span>Bad:</span>
            <span>{state.bad}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>{countTotalFeedback(state)}</span>
          </li>
          <li>
            <span>Positive feedback:</span>
            <span>
              {countPositiveFeedbackPercentage(
                countTotalFeedback(state),
                state.good
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
