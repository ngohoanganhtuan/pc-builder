import Sidebar from '@components/Sidebar/Sidebar';

const ThemeSidebar = ({ isOpenSidebar = false, handleToggleSidebar, themeVariantBox, backgroundVariantBox }) => (
  <Sidebar
    additionalClassName="theme-sidebar"
    isOpen={isOpenSidebar}
    handleToggleSidebar={handleToggleSidebar}
  >
    <h2 className="fs-4 text-white">Setting theme</h2>
    {themeVariantBox}
    <hr />
    <h2 className="fs-4 mb-4 text-white">Setting background</h2>
    {backgroundVariantBox}
    <hr />
  </Sidebar>
);

export default ThemeSidebar;
