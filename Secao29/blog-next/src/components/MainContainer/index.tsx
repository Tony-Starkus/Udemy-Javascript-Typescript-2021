import React from 'react';
import * as Styled from './styled';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default MainContainer;
