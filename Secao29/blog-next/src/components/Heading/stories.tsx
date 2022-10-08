import { Story, Meta } from '@storybook/react/types-7-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Uma coisa qualquer',
  },
} as Meta;

export const Primary: Story<HeadingProps> = (args) => (
  <div>
    <Heading {...args} />
  </div>
);
