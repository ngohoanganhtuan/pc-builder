import React from 'react';

// Enums
import { SIZES } from '@enums';
import { useTheme } from '@hooks/useTheme';
import clsx from 'clsx';

/**
 * @type { Object }
 * @property { number } value - Value of input.
 * @property { Function } onClickIncrease - This function handles 'click' event to increase value.
 * @property { Function } onClickDecrease - This function handles 'click' event to decrease value.
 * @property { Sizes } size - Size of quantity input.
 */
type Props = {
  value: number;
  onClickIncrease?: () => void;
  onClickDecrease?: () => void;
  size?: SIZES;
  additionalClasses?: string;
};

/**
 * This component represents QuantityInput
 */
export const QuantityInput = ({
  value = 0,
  onClickIncrease,
  onClickDecrease,
  size = SIZES.MEDIUM,
  additionalClasses = '',
}: Props): JSX.Element => {
  const { theme } = useTheme();

  const btnIconClass = clsx('btn shadow-none', {
    'text-light': theme === 'dark',
    'text-dark': theme === 'light',
  });

  return (
    <div
      className={`bg-glass quantity-input d-flex input-group-${size} shadow rounded-pill overflow-hidden quantity-input-${size} ${additionalClasses}`}
    >
      <button
        className={btnIconClass}
        onClick={onClickDecrease}
        data-testid="decrease-quantity-button"
      >
        <i className="bi bi-dash" />
      </button>
      <p className="d-flex m-0 align-items-center fw-bold w-100 justify-content-center">{value}</p>
      <button
        className={btnIconClass}
        onClick={onClickIncrease}
        data-testid="increase-quantity-button"
      >
        <i className="bi bi-plus" />
      </button>
    </div>
  );
};
