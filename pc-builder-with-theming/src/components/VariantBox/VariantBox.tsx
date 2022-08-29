import { ThemeTypeName } from '@contexts';

const variantColorThemes = {
  light: { '100': 'bg-light', '50': 'bg-white-o-5', '10': 'bg-white-o-1' },
  dark: { '100': 'bg-dark', '50': 'bg-dark-o-5', '10': 'bg-dark-o-1' },
  primary: { '100': 'bg-primary', '50': 'bg-primary-o-5', '10': 'bg-primary-o-1' },
  success: { '100': 'bg-success', '50': 'bg-success-o-5', '10': 'bg-success-o-1' },
  info: { '100': 'bg-info', '50': 'bg-info-o-5', '10': 'bg-info-o-1' },
};

const textColorThemes = {
  dark: 'text-dark',
  light: 'text-light',
  primary: 'text-orange-700',
  success: 'text-indigo-500',
  info: 'text-pink-500',
};

const VariantBox = ({ theme }: { theme: ThemeTypeName }) => {
  return (
    <div className="d-flex flex-column">
      <strong className={textColorThemes[theme]}>{theme.toString().toUpperCase()}</strong>
      <div
        className="d-flex rounded overflow-hidden"
        style={{ height: 20, width: '100%' }}
      >
        <div className={`h-100 flex-fill ${variantColorThemes[theme]['100']}`}></div>
        <div className={`h-100 flex-fill ${variantColorThemes[theme]['50']}`}></div>
        <div className={`h-100 flex-fill ${variantColorThemes[theme]['10']}`}></div>
      </div>
    </div>
  );
};

export default VariantBox;
