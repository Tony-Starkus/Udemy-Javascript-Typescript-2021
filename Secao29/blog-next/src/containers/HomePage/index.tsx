import React from 'react';
import { PostData } from '../../domain/posts/post';
import { Container } from './styled';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

interface HomePageProps {
  posts: PostData[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
