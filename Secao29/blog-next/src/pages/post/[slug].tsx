import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../containers/Post';
import { getAllPosts, getPost } from '../../data/posts';
import { PostData } from '../../domain/posts/post';
import Error from 'next/error';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost: React.FC<DynamicPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando página...</div>;
  }

  if (!post.attributes) return <Error statusCode={404} />;
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: { slug: post.attributes.slug },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
  };
};
