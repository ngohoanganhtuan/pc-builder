import React, { memo } from 'react';

/**
 * @type { Object }
 * @property { string | number } content - Badge content.
 * @property { string } className - element class name.
 */
type Props = {
  content: string | number;
  className?: string;
  top?: string | number;
  left?: string | number;
};

/**
 * This component represents Badge
 */
export const Badge = memo(({ top = 0, left = 0, content, className = '' }: Props): JSX.Element => {
  return (
    <span
      style={{ top, left }}
      className={`fs-6 rounded-pill bg-danger px-2 ${className}`}
    >
      {content}
    </span>
  );
});
