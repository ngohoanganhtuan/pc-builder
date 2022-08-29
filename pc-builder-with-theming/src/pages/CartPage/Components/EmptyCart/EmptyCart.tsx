const EmptyCart = () => {
  return (
    <div className="d-flex rounded flex-column m-3 mx-auto p-5 bg-glass justify-content-center align-items-center">
      <span className="fs-1">
        <i className="bi bi-shop-window" />
      </span>
      <p className="fs-2 fw-bold m-0">Nothing in your cart!</p>
    </div>
  );
};

export default EmptyCart;
