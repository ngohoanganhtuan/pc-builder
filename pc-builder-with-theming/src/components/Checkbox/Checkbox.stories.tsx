import { useState } from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Checkbox } from '@components';

export default {
  title: 'PCBuilder/Checkbox',
  component: Checkbox,
  decorators: [
    () => {
      const [isChecked, setCheckedState] = useState<boolean>(false);

      const handleSetCheckedState = () => {
        setCheckedState((prev) => !prev);
      };

      return (
        <Checkbox
          id="checkbox-1"
          checked={isChecked}
          value="checkbox-1"
          name="checkbox-1"
          label="Checkbox label"
          handleCheckboxChanged={handleSetCheckedState}
        />
      );
    },
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Sample = Template.bind({});
