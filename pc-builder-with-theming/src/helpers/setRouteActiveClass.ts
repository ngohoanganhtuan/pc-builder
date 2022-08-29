import clsx from 'clsx';

// Interfaces
import { ISetRouteActiveClass } from '@interfaces';

/**
 * @function setRouteActiveClass - This function set route active class.
 */
export const setRouteActiveClass = ({ isActive }: ISetRouteActiveClass) => {
  const defaultClassNames = 'align-self-center fs-2 position-relative nav-link';

  const conditionalClassNames = clsx({
    'text-warning': isActive,
    'text-light': !isActive,
  });

  return [defaultClassNames, conditionalClassNames].join(' ');
};
