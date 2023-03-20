import { Container } from './Section.styled';
export const Section = ({ children, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};
