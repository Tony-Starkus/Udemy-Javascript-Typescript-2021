import React from 'react';
import { formatDate } from '../../utils/format-date';
import { Container } from './styled';
import Date from '../Date';

export type PostDetailsProps = {
  author: string;
  category: string;
  date: string;
};

const PostDetails: React.FC<PostDetailsProps> = ({
  author,
  category,
  date,
}) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} | {category}
    </Container>
  );
};

export default PostDetails;
