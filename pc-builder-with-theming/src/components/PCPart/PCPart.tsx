import { Link } from 'react-router-dom';
import { memo } from 'react';

// Components
import { QuantityInput } from '@components';

// Enums
import { SIZES, PC_PART_VARIANTS, ROUTES } from '@enums';

// Constants
import { CURRENCY } from '@constants';
import { useTheme } from '@hooks/useTheme';
import clsx from 'clsx';

/**
 * @type { Object }
 * @property { string } name - Name of PC part.
 * @property { number } price - Price of PC part.
 * @property { string } thumbnail - Thumbnail of PC part.
 * @property { PC_PART_VARIANTS } variant - Variants of PC part.
 * @property { number } quantity - Quantity number of PC part.
 * @property { Function } adjustQuantity - This function handles adjust quantity.
 * @property { Function } handleSelect - This function handles select PC part.
 * @property { Function } handleDelete - This function handles select PC part.
 * @property { Function } handleIncrease - This function handles increase PC quantity.
 * @property { Function } handleDecrease - This function handles decrease PC quantity.
 */
type Props = {
  id?: number;
  name: string;
  price: number;
  thumbnail: string;
  variant: PC_PART_VARIANTS;
  quantity?: number;
  handleSelect?: () => void;
  handleDelete?: (id?: number) => void;
  handleIncreaseQuantity?: (id?: number) => void;
  handleDecreaseQuantity?: (id?: number) => void;
  textSize?: 'lg' | 'md' | 'sm';
  additionalClasses?: string;
};

/**
 * This component represents PCPart
 */
export const PCPart = memo(
  ({
    id,
    name,
    price,
    thumbnail,
    variant,
    quantity = 1,
    handleSelect,
    handleDelete,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    textSize = 'sm',
    additionalClasses = '',
  }: Props): JSX.Element => {
    const { theme, setTheme } = useTheme();

    const titleClassName = clsx('card-title fw-bold m-0', {
      'fs-5': textSize === 'md',
      'fs-6': textSize === 'sm',
      'fs-3': textSize === 'lg',
      'text-light': theme === 'dark',
      'text-dark': theme === 'light',
    });

    const deletePCPart = () => {
      handleDelete && handleDelete(id);
    };

    const increasePCPartQuantity = () => {
      handleIncreaseQuantity && handleIncreaseQuantity(id);
    };

    const decreasePCPartQuantity = () => {
      handleDecreaseQuantity && handleDecreaseQuantity(id);
    };

    return (
      <div className={setTheme(`${additionalClasses} shadow d-grid pc-part bg-glass`)}>
        <div className="p-1 overflow-hidden rounded-circle thumbnail-area">
          <img
            data-testid="pc-part-thumbnail"
            src={thumbnail}
            className="border rounded-circle pc-part-thumbnail"
            width="120px"
            height="120px"
          />
        </div>
        <div className="p-3 ms-2 d-flex flex-column align-items-start justify-content-between">
          <Link to={`${ROUTES.DETAIL}/${id}`}>
            <p className={titleClassName}>{name}</p>
          </Link>
          {variant === PC_PART_VARIANTS.SELECTED && (
            <QuantityInput
              value={quantity}
              onClickIncrease={increasePCPartQuantity}
              onClickDecrease={decreasePCPartQuantity}
              size={SIZES.SMALL}
            />
          )}
        </div>
        <div className="p-3 d-flex flex-column align-items-end justify-content-between">
          <p className="fs-4 fw-bold">
            {Intl.NumberFormat(CURRENCY.LOCALES, {
              style: 'currency',
              currency: CURRENCY.FORMAT,
            }).format(price)}
          </p>
          {variant === PC_PART_VARIANTS.UNSELECTED ? (
            <button
              className="btn btn-sm btn-success shadow"
              onClick={handleSelect}
              data-testid="pc-part-select-button"
            >
              <i className="bi bi-pin-angle-fill" />
            </button>
          ) : (
            <button
              className="btn btn-sm btn-danger shadow"
              onClick={deletePCPart}
              data-testid="pc-part-remove-button"
            >
              <i className="bi bi-trash-fill" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
