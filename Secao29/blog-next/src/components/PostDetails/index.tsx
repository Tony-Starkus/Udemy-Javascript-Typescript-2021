import React from 'react';
import { formatDate } from '../../utils/format-date';
import { Container } from './styled';
import Date from '../Date';
import Link from 'next/link';

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
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        as={`/post/page/1/${category.toLowerCase()}`}
        href="/post/page/[...param]"
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
};

export default PostDetails;
