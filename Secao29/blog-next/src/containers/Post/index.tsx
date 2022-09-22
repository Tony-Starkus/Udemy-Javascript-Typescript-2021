import React from 'react';
import Head from 'next/head';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';
import { removeHtml } from '../../utils/remove-html';

export type PostProps = {
  post: PostData;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>

        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
          alt={post.attributes.title}
        />

        <PostDetails
          author="Thalisson Bandeira"
          category="Python"
          date={new Date().toString()}
        />

        <PostContainer content={post.attributes.content} />

        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>

      <Footer />
    </>
  );
};
