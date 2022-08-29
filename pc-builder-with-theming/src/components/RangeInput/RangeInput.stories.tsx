import React, { useState } from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { RangeInput } from '@components';

export default {
  title: 'PCBuilder/RangeInput',
  component: RangeInput,
  decorators: [
    () => {
      const [min, setMin] = useState(0);
      const [max, setMax] = useState(0);

      const handleSetMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(parseInt(event.target.value));
      };

      const handleSetMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(parseInt(event.target.value));
      };

      return (
        <>
          <RangeInput
            minValue={min}
            maxValue={max}
            handleMinChanged={handleSetMin}
            handleMaxChanged={handleSetMax}
          />
        </>
      );
    },
  ],
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args) => <RangeInput {...args} />;

export const Sample = Template.bind({});
