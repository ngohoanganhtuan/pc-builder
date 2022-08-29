import React from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Badge } from '@components';

export default {
  title: 'PCBuilder/Badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  content: '100',
};
