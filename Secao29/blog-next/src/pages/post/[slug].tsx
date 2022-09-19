import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Post } from '../../containers/Post';
import { getAllPosts, getPost } from '../../data/posts';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost: React.FC<DynamicPostProps> = ({ post }) => {
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
  };
};
