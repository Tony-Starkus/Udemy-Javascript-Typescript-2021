import React from 'react';
import { Container } from './styled';

export type PostContainerProps = {
  content: string;
};

const PostContainer: React.FC<PostContainerProps> = ({ content }) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContainer;
