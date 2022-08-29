import { useContext } from 'react';

// Contexts
import { ThemeContext } from '@contexts';
import clsx from 'clsx';

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  const setTheme = (className: string | null) => {
    return clsx(className, {
      'bg-dark-o-2': theme === 'dark',
      'bg-white-o-2': theme === 'light',
      'bg-primary-o-2': theme === 'primary',
      'bg-success-o-2': theme === 'success',
      'bg-info-o-2': theme === 'info',
    });
  };

  const setTextColor = (className: string | null) => {
    return clsx(className, {
      'text-white': theme === 'dark',
      'text-dark': theme === 'light',
      'text-orange-700': theme === 'primary',
      'text-indigo-500': theme === 'success',
      'text-pink-500': theme === 'info',
    });
  };

  return { theme, setTheme, setTextColor };
};
