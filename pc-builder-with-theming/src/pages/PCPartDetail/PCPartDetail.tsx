import { NavLink, useParams } from 'react-router-dom';

// Hooks
import { useGetData } from '@hooks';

// Constants
import { CURRENCY } from '@constants';

// Components
import { Badge, Loading } from '@components';

// Store
import { REDUCER_ACTIONS, useDispatch } from '@store';

// Helpers
import { filterPCPartDataCallback, getPCPartsFromDatabaseJSON } from '@helpers';

// Interfaces
import { IPCPart } from '@interfaces';
import { ROUTES } from '@enums';

// Hooks
import useFakeProgressingInTimer from '@hooks/useFakeProgressingInTimer';
import { useTheme } from '@hooks/useTheme';

/**
 * This component represents PCPartDetail
 */
export const PCPartDetail = (): JSX.Element => {
  const { setTheme, setTextColor } = useTheme();

  const { pcPartId } = useParams();
  const { data, isFetching } = useGetData<IPCPart>({
    getDataCallback: getPCPartsFromDatabaseJSON,
    transformDataCallback: filterPCPartDataCallback('id', pcPartId),
    onError: (error) => {
      throw error;
    },
  });
  const pcPart = data && data[0] ? data[0] : null;
  const dispatch = useDispatch();
  const { isProgressing: isAddingProductToCart, setProgressStatus: setAddingProductToCartStatus } =
    useFakeProgressingInTimer(false, 2000);

  /**
   * @function handleAddItemToCart - This function handle add item to cart.
   */
  const handleAddItemToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD_SINGLE_PRODUCT_TO_CART,
      payload: pcPart,
    });
    setAddingProductToCartStatus(true);
  };

  return (
    <div className={setTextColor('pc-part-detail-page container py-1 pb-5 d-flex flex-column gap-5')}>
      <NavLink
        to={ROUTES.ROOT}
        className="text-decoration-none"
      >
        <span className="fw-light fs-6">
          <i className="bi bi-arrow-bar-left"></i>Back to Builder
        </span>
      </NavLink>
      <Loading isFetching={isFetching}>
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <img
              data-testid="pc-part-thumbnail"
              src={pcPart?.thumbnail}
              className="border rounded pc-part-thumbnail"
              width="120px"
              height="120px"
            />
          </div>
          <div className="col-12 col-md-7 d-flex flex-column justify-content-start">
            <h2 className="fs-2">{pcPart?.name}</h2>
            <div className={setTheme('bg-glass py-1 px-2 rounded mb-2 w-50')}>
              <div className="d-flex flex-row justify-content-start gap-3">
                <p className="d-flex gap-1 fs-5">
                  Brand:
                  <span className="fw-bold">{pcPart?.brandName}</span>
                </p>
                <p className="d-flex gap-1 fs-5">
                  Product id:
                  <span className="fw-bold">{pcPart?.id}</span>
                </p>
              </div>
              <p className="price fw-bold fs-2 text-danger">
                {Intl.NumberFormat(CURRENCY.LOCALES, {
                  style: 'currency',
                  currency: CURRENCY.FORMAT,
                }).format(pcPart?.price as number)}
                <Badge
                  content="flash sale"
                  className="rounded badge ms-3 text-blink-animation"
                />
              </p>
            </div>
            <button
              className="btn btn-lg btn-success w-50"
              onClick={handleAddItemToCart}
              disabled={isAddingProductToCart}
            >
              {isAddingProductToCart ? (
                <>
                  Added
                  <i className="ms-2 bi bi-emoji-sunglasses" />
                </>
              ) : (
                <>
                  Add to cart <i className="ms-2 bi bi-box2-heart-fill" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden">
          <table className={setTheme('w-100 bg-glass table-striped')}>
            <thead className="fw-bold fs-3 border-bottom">
              <tr>
                <td
                  className="px-3 py-4"
                  colSpan={2}
                >
                  <p className="m-0">Specifications</p>
                </td>
              </tr>
            </thead>
            <tbody className="fs-5">
              <tr className="border-bottom">
                <th className="px-3 py-3">Name</th>
                <td>{pcPart?.name}</td>
              </tr>
              <tr className="border-bottom">
                <th className="px-3 py-3">Hardware type</th>
                <td>{pcPart?.type}</td>
              </tr>
              <tr>
                <th className="px-3 py-3">Hardware brand</th>
                <td>{pcPart?.brandName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Loading>
    </div>
  );
};
