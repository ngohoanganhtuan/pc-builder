import clsx from 'clsx';

// Assets
import IMAGES, { BACKGROUND_MAPPING_WITH_THUMBNAIL } from '@constants/imagesPath';

// Hooks
import { useTheme } from '@hooks/useTheme';

const BackgroundFixed = ({ background, backgroundCollection }) => {
  const { theme } = useTheme();

  const backgroundPath = backgroundCollection[background];
  const bgClassName = clsx('bg-fixed', {
    'bg-mark-dark': theme === 'dark',
    'bg-mark-light': theme === 'light',
  });

  return (
    <div
      className={bgClassName}
      style={{ backgroundImage: `url(${backgroundPath})`, transition: '2s' }}
    />
  );
};

export default BackgroundFixed;
