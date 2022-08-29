import React from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Footer } from '@components';

export default {
  title: 'PCBuilder/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Sample = Template.bind({});
