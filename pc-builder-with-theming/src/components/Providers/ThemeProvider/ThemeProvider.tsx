import { ReactElement } from 'react';

// Contexts
import { ThemeContext, ThemeTypeName } from '@contexts';

type Props = {
  children: ReactElement[] | ReactElement;
  value: ThemeTypeName;
};

export const ThemeProvider = ({ children, value }: Props) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
