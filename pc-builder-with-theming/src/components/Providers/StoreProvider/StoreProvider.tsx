import { useCallback, ReactElement } from 'react';

// Components
import { DispatchProvider, QuantityProvider, SelectedPCPartProvider, CartProvider } from '@components';

// Store
import { initialState, appStore } from '@store';

type Props = {
  children: ReactElement | ReactElement[];
};

export const StoreProvider = ({ children }: Props) => {
  const configStore = {
    isDebugLogger: true,
    isPersist: true,
  };
  const { state, dispatch } = appStore(initialState, configStore);
  const dispatchMemoize = useCallback(dispatch, []);

  return (
    <DispatchProvider value={dispatchMemoize}>
      <SelectedPCPartProvider value={state.selectedItems}>
        <QuantityProvider value={state.quantities}>
          <CartProvider value={state.cart}>{children}</CartProvider>
        </QuantityProvider>
      </SelectedPCPartProvider>
    </DispatchProvider>
  );
};
