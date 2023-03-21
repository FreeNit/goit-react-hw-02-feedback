import PropTypes from 'prop-types';
import { OptionsWrapper } from './OptionsWrapper.styled';
import { Button } from './Button.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {Object.values(options).map(item => (
        <Button
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// <Button
//   onClick={() => {
//     onLeaveFeedback(options.good);
//   }}
// >
//   Good
// </Button>
// <Button
//   onClick={() => {
//     onLeaveFeedback(options.neutral);
//   }}
// >
//   Neutral
// </Button>
// <Button
//   onClick={() => {
//     onLeaveFeedback(options.bad);
//   }}
// >
//   Bad
// </Button>
