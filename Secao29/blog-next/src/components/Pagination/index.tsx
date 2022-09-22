import React from 'react';
import { Container, NextLink, PreviousLink } from './styled';
import { PaginationData } from '../../data/posts/paginations';
import Link from 'next/link';

export type PaginationProps = PaginationData;

const Pagination: React.FC<PaginationProps> = ({
  nextPage,
  numberOfPosts,
  category,
  postsPerPage,
  previousPage,
}) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  console.log(nextPage, numberOfPosts, postsPerPage, previousPage, category);
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};

export default Pagination;
