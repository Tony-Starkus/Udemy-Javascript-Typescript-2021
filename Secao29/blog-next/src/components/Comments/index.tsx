import React from 'react';
import { Container } from './styled';

/**
 * Use Disqus for comments system.
 *
 * https://disqus.com/
 */

export type CommentsProps = {
  slug: string;
  title: string;
};

const Comments: React.FC<CommentsProps> = () => {
  return <Container>Comentários</Container>;
};

export default Comments;
