import { BrowserRouter } from 'react-router-dom';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { SelectPartFilter } from '@components';

// Enums
import { BRAND_NAMES } from '@enums';

export default {
  title: 'PCBuilder/SelectPartFilter',
  component: SelectPartFilter,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof SelectPartFilter>;

const Template: ComponentStory<typeof SelectPartFilter> = (args) => <SelectPartFilter {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  brands: [BRAND_NAMES.ADATA, BRAND_NAMES.ALIENWARE, BRAND_NAMES.COLORFUL],
  selectedBrands: [BRAND_NAMES.ADATA],
};
