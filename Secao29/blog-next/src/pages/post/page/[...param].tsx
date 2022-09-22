// import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomePage from '../../../containers/HomePage';
import { countAllPosts, getAllPosts } from '../../../data/posts';
import { PaginationData } from '../../../data/posts/paginations';
import { PostData } from '../../../domain/posts/post';

interface HomeProps {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
}

export default function Home({ posts, category, pagination }: HomeProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;

  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const page = Number(context.params.param[0]);
  const category = context.params.param[1] || '';
  const postsPerPage = 1;
  const nextPage = page + 1;
  const previousPage = page - 1;
  const numberOfPosts = await countAllPosts();
  const categoryQuery = category ? `&category.name_contains=${category}` : '';

  console.log(page);
  const posts = await getAllPosts(
    `pagination[page]=${page}&pagination[pageSize]=${postsPerPage}${categoryQuery}`
  );

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: {
      posts,
      pagination,
      category,
      revalidate: 5, // seconds
    },
  };
};
