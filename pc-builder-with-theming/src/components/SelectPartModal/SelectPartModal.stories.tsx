import React from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { SelectPartModal } from '@components';

export default {
  title: 'PCBuilder/SelectPartModal',
} as ComponentMeta<typeof SelectPartModal>;

const Template: ComponentStory<typeof SelectPartModal> = (args) => <SelectPartModal {...args} />;

export const Sample = Template.bind({});
