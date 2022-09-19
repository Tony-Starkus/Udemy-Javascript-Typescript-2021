// import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts';
import { PostData } from '../domain/posts/post';

interface HomeProps {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect(() => {
  //   console.log(posts);
  //   getPosts().then((response) => {
  //     console.log(response);
  //     setPosts(response);
  //   });
  // }, []);

  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts('_sort=id:desc');
  return {
    props: {
      posts,
      revalidate: 5, // seconds
    },
  };
};
