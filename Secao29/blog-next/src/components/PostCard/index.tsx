import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { API_DOMAIN } from '../../config/app-config';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard: React.FC<PostCardProps> = ({ slug, title, cover }) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img
              src={`${API_DOMAIN}${cover}`}
              alt={title}
              // width="100%"
              // height="100%"
              // layout="fixed"
            />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};

export default PostCard;
