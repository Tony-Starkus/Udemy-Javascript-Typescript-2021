import React from 'react';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  console.log(post);
  return (
    <>
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
