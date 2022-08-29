import VariantBox from '@components/VariantBox/VariantBox';
import { ThemeTypeName } from '@contexts';
import clsx from 'clsx';
import { memo } from 'react';

type ThemeVariantType = {
  selectingTheme: ThemeTypeName;
  handleChangeTheme: (themeName: ThemeTypeName) => void;
};

type ThemeVariantItemType = ThemeVariantType & {
  themeName: ThemeTypeName;
};

type ThemeVariantList = ThemeVariantType & {
  themeCollection: string[];
};

export const ThemeVariantItem = memo(
  ({ themeName, selectingTheme, handleChangeTheme }: ThemeVariantItemType) => {
    const onChangeTheme = () => {
      handleChangeTheme(themeName);
    };

    return (
      <li
        className={clsx('my-2 cursor-pointer pe-auto p-2 list-group-item rounded', {
          active: selectingTheme === themeName,
        })}
        role="button"
        tabIndex={0}
        onClick={onChangeTheme}
      >
        <VariantBox theme={themeName} />
      </li>
    );
  },
  (prevProps, props) => prevProps.selectingTheme === props.selectingTheme && prevProps.themeName === props.themeName
);

export const ThemeVariantList = ({ themeCollection = [], selectingTheme, handleChangeTheme }: ThemeVariantList) => {
  return (
    <ul className="list-group list-themes-group list-unstyled list-group-flush scrollarea">
      {themeCollection.map((theme: any) => (
        <ThemeVariantItem
          key={theme}
          themeName={theme}
          selectingTheme={selectingTheme}
          handleChangeTheme={handleChangeTheme}
        />
      ))}
    </ul>
  );
};

export default ThemeVariantList;
