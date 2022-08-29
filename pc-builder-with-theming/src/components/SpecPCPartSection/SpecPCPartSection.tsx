import { memo } from 'react';
import clsx from 'clsx';

// Components
import { PCPart } from '@components';

// Enums
import { PC_PART_TYPES, PC_PART_VARIANTS } from '@enums';

// Interfaces
import { IPCPart } from '@interfaces';

/**
 * @typedef { Object }
 * @property { string } pcPartTypeName - PC part type name.
 * @property { IPCPart } pcPartData - Data of PC part.
 * @property { Function } handleIncreaseQuantity - This function handles increase PC part quantity.
 * @property { Function } handleDecreaseQuantity - This function handles decrease PC part quantity.
 * @property { Function } handleRemovePCPart - This function handles remove PC Part.
 * @property { Function } handleOpenModal - This function handles open modal.
 * @property { number } quantity - PC part quantity.
 */
type Props = {
  pcPartTypeName: PC_PART_TYPES;
  pcPartData?: IPCPart;
  handleIncreaseQuantity: (pcPartId?: number) => void;
  handleDecreaseQuantity: (pcPartId?: number) => void;
  handleRemovePCPart: (pcPartData?: IPCPart) => void;
  handleOpenModal: (open: boolean, pcPartType?: PC_PART_TYPES) => void;
  quantity: number;
  additionalClasses?: string;
};

/**
 * This function represents SpecPCPartSection
 */
export const SpecPCPartSection = memo(
  ({
    pcPartTypeName,
    pcPartData,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemovePCPart,
    handleOpenModal,
    quantity,
    additionalClasses = '',
  }: Props): JSX.Element => {
    /**
     * @function onIncreaseQuantity - This function handles calling handleIncreaseQuantity
     */
    const onIncreaseQuantity = () => {
      handleIncreaseQuantity(pcPartData?.id);
    };

    /**
     * @function onDecreaseQuantity - This function handles calling handleDecreaseQuantity
     */
    const onDecreaseQuantity = () => {
      handleDecreaseQuantity(pcPartData?.id);
    };

    /**
     * @function onRemovePCPart - This function handles calling OnRemovePCPart
     */
    const onRemovePCPart = () => {
      handleRemovePCPart(pcPartData);
    };

    /**
     * @function openModal - Thí function handles open modal
     */
    const openModal = () => {
      handleOpenModal(true, pcPartTypeName);
    };

    /**
     * @variable className - Component class name
     */
    const className = clsx(`w-100 ${additionalClasses}`, {
      'd-flex flex-row justify-content-between pe-3': !pcPartData,
    });

    return (
      <div className={className}>
        <h2 className="fs-5">{pcPartTypeName}</h2>
        {pcPartData ? (
          <PCPart
            additionalClasses="w-100"
            id={pcPartData.id}
            name={pcPartData.name}
            price={pcPartData.price}
            thumbnail={pcPartData.thumbnail}
            quantity={quantity}
            variant={PC_PART_VARIANTS.SELECTED}
            handleIncreaseQuantity={onIncreaseQuantity}
            handleDecreaseQuantity={onDecreaseQuantity}
            handleDelete={onRemovePCPart}
          />
        ) : (
          <button
            className="btn btn-primary btn-sm border-0 shadow"
            onClick={openModal}
            type="button"
          >
            <i className="bi bi-box-arrow-up-right" />
          </button>
        )}
      </div>
    );
  }
);
