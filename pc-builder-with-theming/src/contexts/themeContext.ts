import { createContext } from 'react';

export const THEMES = ['light', 'dark', 'primary', 'info', 'success'];

export type ThemeTypeName = 'dark' | 'light' | 'primary' | 'info' | 'success';

export const ThemeContext = createContext<ThemeTypeName>('dark');
