import clsx from 'clsx';
import { ReactChildren, ReactNode, ReactElement, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  handleToggleSidebar: () => void;
  children: ReactChildren | ReactElement[] | ReactElement | ReactNode;
  additionalClassName?: string;
};

const Sidebar = ({ isOpen = false, handleToggleSidebar, children, additionalClassName = '' }: Props) => {
  const className = clsx('sidebar bg-glass bg-white-o-5 overflow-scroll', {
    backdrop: isOpen,
    [`${additionalClassName}`]: additionalClassName !== '',
  });

  // TODO: usePreventScroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('paddingRight');
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={className}
        style={{
          right: isOpen ? 0 : -300,
        }}
      >
        <article className="d-flex flex-column flex-shrink-0 p-3">{children}</article>
      </div>
      {isOpen && (
        <div
          className="sidebar-backdrop bg-dark-o-3"
          onClick={handleToggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
