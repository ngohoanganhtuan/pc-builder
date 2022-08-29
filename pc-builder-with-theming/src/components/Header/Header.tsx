import { NavLink } from 'react-router-dom';

// Components
import { Badge } from '@components';

// Store
import { useCart } from '@store';

import { useTheme } from '@hooks/useTheme';

// Enums
import { ROUTES } from '@enums';

// Helpers
import { setRouteActiveClass } from '@helpers';

/**
 * @type { Object }
 * @property { boolean } - Dark theme status
 * @property { Function } - This function handle switch theme mode.
 */
type Props = {
  handleToggleSidebar: () => void;
};

/**
 * This component represents Header
 */
export const Header = ({ handleToggleSidebar }: Props): JSX.Element => {
  const carts = useCart();
  const { setTheme, setTextColor } = useTheme();

  return (
    <header className="navbar py-3 navbar-expand-lg navbar-dark bd-navbar">
      <nav className="px-3 bd-navbar">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
          <NavLink
            to={ROUTES.ROOT}
            className="navbar-brand text-decoration-none m-0 my-lg-0 me-lg-auto gap-1"
          >
            <h1 className={setTheme('fs-6 d-flex align-items-center m-0 justify-content-center badge rounded p-2')}>
              <span className={setTextColor('')}>
                PC Builder <i className="bi bi-headset-vr mt-1 ms-2" />
              </span>
            </h1>
          </NavLink>
          <div className="nav justify-content-center my-md-0 text-small position-relative d-flex gap-2">
            <NavLink
              to={ROUTES.CART}
              className={setRouteActiveClass}
            >
              <i className={setTextColor('fs-2 bi bi-cart-fill d-block mx-auto')}></i>
              {carts && carts.length > 0 && (
                <Badge
                  content={carts.length.toString()}
                  className="rounded-circle position-absolute translate-middle badge"
                  top={5}
                  left="100%"
                />
              )}
            </NavLink>
            <button
              className={setTextColor('btn p-0')}
              onClick={handleToggleSidebar}
            >
              <i className="fs-2 bi bi-flower3 hover-spin-animation" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
