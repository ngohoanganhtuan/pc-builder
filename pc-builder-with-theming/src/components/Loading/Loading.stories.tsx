// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Loading } from '@components';

export default {
  title: 'PCBuilder/Loading',
  component: Loading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  isFetching: true,
};
