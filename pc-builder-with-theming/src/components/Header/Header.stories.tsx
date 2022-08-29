import { BrowserRouter } from 'react-router-dom';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Header } from '@components';

export default {
  title: 'PCBuilder/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Sample = Template.bind({});
Sample.args = {};
