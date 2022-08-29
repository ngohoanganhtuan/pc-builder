import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Enums
import { PC_PART_TYPES } from '@enums';

// Components
import { SpecPCPartSection, SelectPartModal, ErrorBoundary } from '@components';

// Interfaces
import { IPCPart } from '@interfaces';

// Helpers
import { calculateTotalPrice, removeLocalStorageItem } from '@helpers';

// Store
import { useSelectedPCState, useQuantityState, useDispatch, REDUCER_ACTIONS, initialState } from '@store';

// Hooks
import useFakeProgressingInTimer from '@hooks/useFakeProgressingInTimer';
import { useTheme } from '@hooks/useTheme';

/**
 * This component represents SpecBuilderPage
 */
export const SpecBuilderPage = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPCPartType, setSelectedPCPartType] = useState<PC_PART_TYPES | undefined>(undefined);

  const selectedItemsState = useSelectedPCState();
  const quantityState = useQuantityState();
  const dispatch = useDispatch();
  const { setTheme, setTextColor } = useTheme();

  const isSelectingAnyItem = selectedItemsState?.length !== 0;

  const { isProgressing: isAddingProductToCart, setProgressStatus: setAddingProductToCartStatus } =
    useFakeProgressingInTimer(false, 2000);

  useEffect(() => {
    document.title = 'PC Builder';
  }, []);

  /**
   * @function handleWhenSetModalOpen - This function handles set modal open/close and set selected PC Part based on when it's closed or opened.
   */
  const handleWhenSetModalOpen = useCallback((open: boolean, pcPartType?: PC_PART_TYPES) => {
    setIsModalOpen(open);
    setSelectedPCPartType(pcPartType);
  }, []);

  /**
   * @function handleAddPCPartToCurrentSpec - This function handles add PC part to current spec.
   */
  const handleAddPCPartToCurrentSpec = (pcPart: IPCPart) => {
    dispatch({ type: REDUCER_ACTIONS.SELECTED_ITEM, payload: pcPart });
    setIsModalOpen(false);
  };

  /**
   * @variable { string } totalPrice - Total price of selected PC parts.
   */
  const totalPrice = useMemo(
    () =>
      calculateTotalPrice({
        quantities: quantityState,
        products: selectedItemsState,
      }),
    [quantityState, selectedItemsState]
  );

  /**
   * @function handleResetSpec - This function handles reset current spec.
   */
  const handleResetSpec = (): void => {
    removeLocalStorageItem();
    dispatch({ type: REDUCER_ACTIONS.INITIAL_HYDRATE, payload: initialState });
  };

  /**
   * @function handleRemovePCPartFromCurrentSpec - This function handles remove PC part from current spec.
   */
  const handleRemovePCPartFromCurrentSpec = useCallback((pcPart?: IPCPart) => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE_SELECTED_ITEM, payload: pcPart });
  }, []);

  /**
   * @function handleIncreaseQuantity - This function handles increase PC part quantity.
   */
  const handleIncreaseQuantity = useCallback((pcPartId?: number) => {
    dispatch({ type: REDUCER_ACTIONS.INCREASE_QUANTITY, payload: pcPartId });
  }, []);

  /**
   * @function handleDecreaseQuantity - This function handles decrease PC part quantity.
   */
  const handleDecreaseQuantity = useCallback((pcPartId?: number) => {
    dispatch({ type: REDUCER_ACTIONS.DECREASE_QUANTITY, payload: pcPartId });
  }, []);

  /**
   * @function handleAddToCart - This function handles add PC part to cart.
   */
  const handleAddToCart = () => {
    if (selectedItemsState?.length) {
      dispatch({ type: REDUCER_ACTIONS.PUSH_SELECTED_PRODUCTS_TO_CART });
    }

    setAddingProductToCartStatus(true);
  };

  return (
    <div className={setTextColor('spec-builder-page container pb-5')}>
      <div className="d-flex align-items-center flex-column mt-5 row">
        <div className="col-lg-10 col-md-12 d-flex flex-column gap-5">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <button
                className="btn btn-danger border-0 shadow"
                onClick={handleResetSpec}
              >
                <i className="bi bi-arrow-counterclockwise" /> Reset
              </button>
            </div>
            <div className={setTheme('px-3 py-1 bg-glass rounded-pill align-self-end px-5 text-center')}>
              <p className="fs-2 m-0 fw-bold">Total : {totalPrice}</p>
            </div>
          </div>
          {Object.values(PC_PART_TYPES).map((typeName) => {
            const pcPart = selectedItemsState?.find((item) => item.type === typeName);
            const pcPactQuantity = quantityState?.find((item) => item.productId === pcPart?.id)?.quantity || 0;

            return (
              <SpecPCPartSection
                key={typeName}
                pcPartTypeName={typeName}
                pcPartData={pcPart}
                quantity={pcPactQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemovePCPart={handleRemovePCPartFromCurrentSpec}
                handleOpenModal={handleWhenSetModalOpen}
              />
            );
          })}
          <button
            className="btn btn-success btn-lg w-50 align-self-end mt-5"
            onClick={handleAddToCart}
            disabled={isAddingProductToCart}
            data-testid="add-to-cart-button"
          >
            {isAddingProductToCart ? (
              <>
                {isSelectingAnyItem ? (
                  <>
                    Added <i className="ms-2 bi bi-emoji-sunglasses" />
                  </>
                ) : (
                  <>
                    Nothing to add <i className="ms-2 bi bi-emoji-frown" />
                  </>
                )}
              </>
            ) : (
              <>
                Add to Cart
                <i className="ms-2 bi bi-box2-heart-fill" />
              </>
            )}
          </button>
        </div>
      </div>
      <ErrorBoundary>
        <SelectPartModal
          key={selectedPCPartType}
          isOpen={isModalOpen}
          handleCloseModal={handleWhenSetModalOpen}
          selectedPCPartType={selectedPCPartType}
          handleSelectPCPart={handleAddPCPartToCurrentSpec}
        />
      </ErrorBoundary>
    </div>
  );
};
