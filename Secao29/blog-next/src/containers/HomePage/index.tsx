import React from 'react';
import Head from 'next/head';
import { PostData } from '../../domain/posts/post';
import { Container, Category, AllPostsLinks } from './styled';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../data/posts/paginations';
import Pagination from '../../components/Pagination';
import Link from 'next/link';

interface HomePageProps {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
}

const HomePage: React.FC<HomePageProps> = ({ posts, category, pagination }) => {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination?.nextPage ? ` - Página ${pagination.nextPage - 1}` : ''}
        </title>
        <meta name="description" content="Este é meu blog de tecnologia" />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={
                post.attributes.cover?.data.attributes.formats.small.url || ''
              }
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href="post/page/[...param]" as="/post/page/1" passHref>
            <AllPostsLinks>Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
