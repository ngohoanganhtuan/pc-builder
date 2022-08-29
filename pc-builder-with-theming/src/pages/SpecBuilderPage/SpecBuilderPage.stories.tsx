import { BrowserRouter } from 'react-router-dom';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Pages
import { SpecBuilderPage } from '@pages';

export default {
  title: 'PCBuilder/SpecBuilderPage',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof SpecBuilderPage>;

const Template: ComponentStory<typeof SpecBuilderPage> = () => <SpecBuilderPage />;

export const Sample = Template.bind({});
