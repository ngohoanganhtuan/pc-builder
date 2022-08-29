import React from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { ErrorBoundaryUI } from '@components';

export default {
  title: 'PCBuilder/ErrorBoundary',
  component: ErrorBoundaryUI,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorBoundaryUI>;

const Template: ComponentStory<typeof ErrorBoundaryUI> = (args) => <ErrorBoundaryUI {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  error: {
    name: 'Error name',
    message: 'Error message',
    stack: 'Error stack',
  },
};
