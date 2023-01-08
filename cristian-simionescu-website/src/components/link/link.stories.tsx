import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link as ReactRouter } from 'react-router-dom';

import { LinkProps } from './Link.types';

import Link from '.';

const LinkTemplate: ComponentStory<typeof Link> = (args: LinkProps) => <Link {...args}>Link</Link>;

export const DefaultLink = LinkTemplate.bind({});
DefaultLink.args = {
  href: 'https://example.com',
};

export const ReactRouterLink = LinkTemplate.bind({});
ReactRouterLink.args = {
  as: ReactRouter,
  to: '/home',
};

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    backgrounds: { default: 'purple' },
  },
} as ComponentMeta<typeof Link>;
