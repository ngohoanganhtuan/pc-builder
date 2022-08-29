import clsx from 'clsx';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Style
import 'index.scss';

// Components
import { ErrorBoundary, Footer, Header, StoreProvider } from '@components';

// Pages
import { CartPage, SpecBuilderPage, PCPartDetail } from '@pages';
import { ThemeProvider } from '@components/Providers/ThemeProvider/ThemeProvider';
import BackgroundFixed from '@components/BackgroundFixed/BackgroundFixed';
import Sidebar from '@components/Sidebar/Sidebar';

// Enums
import { ROUTES } from '@enums';
import VariantBox from '@components/VariantBox/VariantBox';
import ThemeSidebar from '@components/ThemeSidebar/ThemeSidebar';
import { THEMES, ThemeTypeName } from '@contexts';
import { BACKGROUND_MAPPING_WITH_THUMBNAIL, BACKGROUND_THUMBNAIL } from '@constants/imagesPath';
import { ThemeVariantList } from '@components/ThemeSidebar/ThemeVariantList';
import BackgroundVariantList from '@components/ThemeSidebar/BackgroundVariantList';

// Global state cho PC (inner component)
// Global state cho Theme (inner component)

const App = () => {
  const [theme, setTheme] = useState<ThemeTypeName>(THEMES[1] as ThemeTypeName);
  const [background, setBackground] = useState<string>('BACKGROUND_THUMB_LIGHT_6');
  const [isOpenSidebar, setToggleSidebar] = useState<boolean>(false);

  const handleChangeTheme = (theme: ThemeTypeName) => {
    setTheme(theme);
  };

  const handleToggleSidebar = () => {
    setToggleSidebar((prevState) => !prevState);
  };

  const handleChangeBackground = (background: string) => {
    setBackground(background);
  };

  return (
    <ThemeProvider value={theme}>
      <BackgroundFixed
        background={background}
        backgroundCollection={BACKGROUND_MAPPING_WITH_THUMBNAIL}
      />
      <ThemeSidebar
        isOpenSidebar={isOpenSidebar}
        handleToggleSidebar={handleToggleSidebar}
        themeVariantBox={
          <ThemeVariantList
            themeCollection={THEMES}
            selectingTheme={theme}
            handleChangeTheme={handleChangeTheme}
          />
        }
        backgroundVariantBox={
          <BackgroundVariantList
            backgroundCollection={BACKGROUND_THUMBNAIL}
            selectingBackground={background}
            handleChangeBackground={handleChangeBackground}
          />
        }
      />
      <div className="top-content d-flex flex-column flex-1 justify-content-between">
        <StoreProvider>
          <ErrorBoundary>
            <BrowserRouter>
              <Header handleToggleSidebar={handleToggleSidebar} />
              <Routes>
                <Route
                  path={ROUTES.ROOT}
                  element={<SpecBuilderPage />}
                />
                <Route
                  path={ROUTES.CART}
                  element={<CartPage />}
                />
                <Route
                  path={`${ROUTES.DETAIL}/:pcPartId`}
                  element={<PCPartDetail />}
                />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </StoreProvider>
      </div>
      <div className="bottom-content">
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
