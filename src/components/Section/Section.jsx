import PropTypes from 'prop-types';

import { Container } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
