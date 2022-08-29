import { BrowserRouter } from 'react-router-dom';

// Types
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { SpecPCPartSection } from '@components';

// Enums
import { PC_PART_TYPES } from '@enums';

// Mock Data
import { mockData } from '@mockData';

// Interfaces
import { IPCPart } from '@interfaces';

export default {
  title: 'PCBuilder/SpecPCPartSection',
  component: SpecPCPartSection,
  decorators: [
    () => {
      const handleFunction = () => {};
      return (
        <div className="d-flex flex-column gap-4 mt-5">
          <BrowserRouter>
            {Object.values(PC_PART_TYPES).map((typeName) => {
              const pcPart: IPCPart | undefined = mockData.find((value: IPCPart) => value.type === typeName);
              return (
                <SpecPCPartSection
                  key={typeName}
                  pcPartTypeName={typeName}
                  pcPartData={pcPart}
                  handleDecreaseQuantity={handleFunction}
                  handleIncreaseQuantity={handleFunction}
                  handleOpenModal={handleFunction}
                  handleRemovePCPart={handleFunction}
                  quantity={100}
                />
              );
            })}
          </BrowserRouter>
        </div>
      );
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SpecPCPartSection>;

const Template: ComponentStory<typeof SpecPCPartSection> = (args) => <SpecPCPartSection {...args} />;

export const Sample = Template.bind({});
