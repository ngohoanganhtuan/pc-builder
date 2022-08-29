import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { PCPart } from '@components';

// Enums
import { PC_PART_VARIANTS } from '@enums';

export default {
  title: 'PCBuilder/PCPart',
  component: PCPart,
  decorators: [
    () => {
      const [quantity, setQuantity] = useState<number>(1);
      const [variant, setVariant] = useState<PC_PART_VARIANTS>(PC_PART_VARIANTS.SELECTED);

      const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
      };

      const handleDecreaseQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1);
      };

      const handleSetSelectedVariant = () => {
        setVariant(PC_PART_VARIANTS.SELECTED);
      };

      const handleSetUnselectedVariant = () => {
        setVariant(PC_PART_VARIANTS.UNSELECTED);
      };

      return (
        <BrowserRouter>
          <PCPart
            thumbnail="https://cdn.techzones.vn/Data/Sites/1/Product/35710/techzones-amd-ryzen-7-5600x-6c12t-32mb-cache-37ghz-up-to-46ghz.jpg"
            name="AMD Ryzen 7 5600X - 6C/12T 32MB Cache 3.7GHz Up to 4.6GHz"
            price={1000000}
            quantity={quantity}
            variant={variant}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
          <br />
          <button
            className="btn btn-primary"
            onClick={handleSetSelectedVariant}
          >
            Selected Variant
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSetUnselectedVariant}
          >
            Unselected Variant
          </button>
        </BrowserRouter>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PCPart>;

const Template: ComponentStory<typeof PCPart> = (args) => <PCPart {...args} />;

export const Sample = Template.bind({});
