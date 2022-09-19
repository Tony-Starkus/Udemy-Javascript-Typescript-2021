import { API_URL, POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${API_URL}/posts?_slug=${slugString}&populate=*`;
  const post = await fetchJson<PostData[]>(url);
  const content = await markdownToHml(post[0].attributes.content);
  post[0].attributes.content = content;
  return post;
};

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
};

export const countAllPosts = async (): Promise<number> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts.length;
};
