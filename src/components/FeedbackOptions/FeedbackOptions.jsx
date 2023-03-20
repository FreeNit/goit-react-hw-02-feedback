export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            onLeaveFeedback(options.good);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            onLeaveFeedback(options.neutral);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            onLeaveFeedback(options.bad);
          }}
        >
          Bad
        </button>
      </div>
    </div>
  );
};
