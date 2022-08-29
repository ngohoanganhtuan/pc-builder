import { CURRENCY } from '@constants';
import clsx from 'clsx';
import React, { memo, useEffect, useRef } from 'react';

/**
 * @type { Object }
 * @property { number } minValue - Minimum value.
 * @property { number } maxValue - Maximum value.
 * @property { Function } handleMinChanged - Provoke this function when minimum value is changed.
 * @property { Function } handleMaxChanged - Provoke this function when maximum value is changed.
 */
type Props = {
  minValue: number;
  maxValue: number;
  handleMinChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * This component represents RangeInput
 */
export const RangeInput = memo(({ minValue, maxValue, handleMinChanged, handleMaxChanged }: Props): JSX.Element => {
  const minRefValue = useRef<HTMLInputElement>();
  const maxRefValue = useRef<HTMLInputElement>();

  const theNumberFormat = Intl.NumberFormat(CURRENCY.LOCALES, {
    style: 'currency',
    currency: CURRENCY.FORMAT,
  });

  const onFocusInput = (val: number) => (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = val === 0 ? '' : val.toString();
  };

  const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = theNumberFormat.format(Number(e.target.value)).toString();
  };

  useEffect(() => {
    if (minRefValue.current != null && maxRefValue.current != null) {
      minRefValue.current.value = theNumberFormat.format(minValue).toString();
      maxRefValue.current.value = theNumberFormat.format(maxValue).toString();
    }
  }, []);

  const inputClassName = clsx('form-control text-center', {
    'is-invalid': maxValue < minValue,
  });

  return (
    <div className="flex-lg-column text-center range-slider d-flex flex-row justify-content-between align-items-center gap-2">
      <input
        className={inputClassName}
        placeholder="Minimum"
        ref={minRefValue}
        onChange={handleMinChanged}
        onFocus={onFocusInput(minValue)}
        onBlur={onBlurInput}
        data-testid="min-range-input"
      />
      <i className="fs-5 mx-0 bi bi-soundwave" />
      <input
        className={inputClassName}
        placeholder="Maximum"
        ref={maxRefValue}
        onFocus={onFocusInput(maxValue)}
        onBlur={onBlurInput}
        onChange={handleMaxChanged}
        data-testid="max-range-input"
      />
    </div>
  );
});
