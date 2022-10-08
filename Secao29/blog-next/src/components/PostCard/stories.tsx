import { Story, Meta } from '@storybook/react/types-7-0';
import PostCard, { PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default title',
    cover:
      'https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg',
  },
} as Meta;

export const Primary: Story<PostCardProps> = (args) => (
  <div>
    <PostCard {...args} />
  </div>
);
