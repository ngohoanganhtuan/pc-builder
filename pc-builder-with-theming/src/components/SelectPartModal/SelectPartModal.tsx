import React, { useCallback, useEffect, useRef, useState } from 'react';

// Enums
import { BRAND_NAMES, PC_PART_TYPES, PC_PART_VARIANTS } from '@enums';

// Components
import { PCPart, SelectPartFilter, Loading } from '@components';

// Hooks
import { useGetData } from '@hooks';

// Interfaces
import { IPCPart } from '@interfaces';

// Helpers
import {
  filterPCPartDataCallback,
  filterPCParts,
  getBrandsRelatedToPCParts,
  getPCPartsFromDatabaseJSON,
} from '@helpers';
import { useTheme } from '@hooks/useTheme';

/**
 * @type { Object }
 * @property { PC_PART_TYPES } selectedPCPartType - Selected PC Part type.
 * @property { Function } handleCloseModal - A function to close modal.
 * @property { Function } handleSelectPCPart - A function handles select PC part.
 */
type Props = {
  selectedPCPartType?: PC_PART_TYPES;
  handleCloseModal: (open: boolean, pcPartType?: PC_PART_TYPES) => void;
  handleSelectPCPart: (pcPart: IPCPart) => void;
  isOpen: boolean;
};

/**
 * This component represents SelectPartModal
 */
export const SelectPartModal = ({
  isOpen = false,
  selectedPCPartType,
  handleCloseModal,
  handleSelectPCPart,
}: Props): JSX.Element => {
  const { setTheme } = useTheme();
  const fadeModalRef = useRef<HTMLDivElement>(null);

  const { data: pcPartsRawData, isFetching } = useGetData<IPCPart>({
    getDataCallback: getPCPartsFromDatabaseJSON,
    transformDataCallback: filterPCPartDataCallback('type', selectedPCPartType),
    onError: (error) => {
      throw error;
    },
  });
  const [selectedBrands, setSelectedBrands] = useState<BRAND_NAMES[]>([]);
  const [minPrice, setMinPrice] = useState<number>(100000);
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  /**
   * @variable { IPCPart[] } pcParts - PC parts after filtered.
   */
  const pcParts: IPCPart[] = filterPCParts({
    pcPartsRawData,
    selectedBrands,
    minPrice,
    maxPrice,
    pageNumber,
  });

  useEffect(() => {
    pcPartsRawData.length > pcParts.length && setHasMore(true);
    (pcPartsRawData.length === pcParts.length || selectedBrands.length > 0) && setHasMore(false);
  }, [pcParts]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';

      if (fadeModalRef != undefined && fadeModalRef.current != null) {
        fadeModalRef.current.className = '';
      }
    }

    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('paddingRight');
    };
  }, [isOpen]);

  /**
   * @variable { BRAND_NAMES[] } brandsRelatedToPCParts - Brand names related to PC parts.
   */
  const brandsRelatedToPCParts = getBrandsRelatedToPCParts(pcPartsRawData);

  /**
   * @function handleSelectBrandFilter - This function handles select brand filter.
   */
  const handleSelectBrandFilter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as BRAND_NAMES;
      selectedBrands.indexOf(value) !== -1 &&
        setSelectedBrands(selectedBrands.filter((brand) => brand !== event.target.value));
      selectedBrands.indexOf(value) === -1 && setSelectedBrands((prev) => [...prev, value]);
    },
    [selectedBrands]
  );

  /**
   * @function handleSetMinPrice - This function handles set minimum price limit.
   * If input value is empty, min price will be zero.
   */
  const handleSetMinPrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(!event.target.value ? 0 : parseInt(event.target.value));
  }, []);

  /**
   * @function handleSetMaxPrice - This function handles set maximum price limit.
   * If input value is empty, max price will be the price of the PC part with the highest price.
   */
  const handleSetMaxPrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(!event.target.value ? 0 : parseInt(event.target.value));
  }, []);

  /**
   * @function handleLoadMorePCParts - This function handles load more Pc parts by increase page number by 1.
   */
  const handleLoadMorePCParts = () => {
    pcParts.length < pcPartsRawData.length && setPageNumber(pageNumber + 1);
  };

  /**
   * @function selectPCPart - Trigger handleSelectPCPart function
   */
  const selectPCPart = (pcPart: IPCPart) => () => {
    handleSelectPCPart(pcPart);
  };

  /**
   * @function closeModal - Trigger handleCloseModal function
   */
  const closeModal = () => {
    handleCloseModal(false);
  };

  return (
    <div
      className="modal select-part-modal bg-glass"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div
        className="fade-scale"
        style={{ transition: '1s' }}
        ref={fadeModalRef}
      >
        <div className="modal-dialog modal-xl">
          <div className={setTheme('modal-content mt-4 shadow bg-glass')}>
            <button
              className="cursor-pointer z-index-1 btn btn-danger rounded-circle position-absolute"
              onClick={closeModal}
              data-testid="close-modal-button"
            >
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="modal-body row">
              <div className="col-12 col-lg-3 d-flex flex-column pb-3 justify-content-between">
                <SelectPartFilter
                  brands={brandsRelatedToPCParts}
                  selectedBrands={selectedBrands}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  handleCheckboxChanged={handleSelectBrandFilter}
                  handleMinChanged={handleSetMinPrice}
                  handleMaxChanged={handleSetMaxPrice}
                />
              </div>
              <div className="col-12 col-lg-9 d-flex flex-column gap-3 pc-parts-list py-3">
                <Loading isFetching={isFetching}>
                  {pcParts.map((pcPart: IPCPart) => (
                    <PCPart
                      additionalClasses="w-100"
                      id={pcPart.id}
                      name={pcPart.name}
                      price={pcPart.price}
                      thumbnail={pcPart.thumbnail}
                      key={pcPart.id}
                      variant={PC_PART_VARIANTS.UNSELECTED}
                      handleSelect={selectPCPart(pcPart)}
                      textSize="sm"
                    />
                  ))}
                  {hasMore && (
                    <button
                      className="btn btn-warning rounded-pill text-white"
                      onClick={handleLoadMorePCParts}
                      data-testid="load-more-button"
                    >
                      Load more
                    </button>
                  )}
                </Loading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
