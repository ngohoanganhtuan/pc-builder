import { useState } from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { QuantityInput } from '@components';

// Enums
import { SIZES } from '@enums';

export default {
  title: 'PCBuilder/QuantityInput',
  component: QuantityInput,
  decorators: [
    () => {
      const [count, setCount] = useState<number>(0);
      const [size, setSize] = useState<SIZES>(SIZES.MEDIUM);

      const handleSetSizeSmall = () => {
        setSize(SIZES.SMALL);
      };

      const handleSetSizeMedium = () => {
        setSize(SIZES.MEDIUM);
      };

      const handleSetSizeLarge = () => {
        setSize(SIZES.LARGE);
      };

      return (
        <>
          <QuantityInput
            value={count}
            onClickIncrease={() => setCount(count + 1)}
            onClickDecrease={() => setCount(count - 1)}
            size={size}
          />
          <br />
          <button
            className="btn btn-primary"
            onClick={handleSetSizeSmall}
          >
            Small
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSetSizeMedium}
          >
            Medium
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSetSizeLarge}
          >
            Large
          </button>
        </>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QuantityInput>;

const Template: ComponentStory<typeof QuantityInput> = (args) => <QuantityInput {...args} />;

export const Sample = Template.bind({});
