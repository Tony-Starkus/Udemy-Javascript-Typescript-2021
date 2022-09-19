import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Heading;
