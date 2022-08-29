import React from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Pages
import { CartPage } from '@pages';

export default {
  title: 'PCBuilder/CartPage',
  decorators: [() => <CartPage />],
} as ComponentMeta<typeof CartPage>;

const Template: ComponentStory<typeof CartPage> = () => <CartPage />;

export const Sample = Template.bind({});
