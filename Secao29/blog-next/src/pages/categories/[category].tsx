import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts';
import { PostData } from '../../domain/posts/post';

interface CategoryProps {
  posts: PostData[];
  category: string;
}

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const posts = await getAllPosts(
    `category.name_contains=${context.query.category}`
  );

  return {
    props: {
      posts,
      category: context.query.category,
    },
  };
};
