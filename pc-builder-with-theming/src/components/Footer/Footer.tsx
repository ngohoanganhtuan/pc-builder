/**
 * This component represents Footer
 */
export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-dark text-light text-opacity-75 shadow-sm border-none footer">
      <div className="container p-3 bg-indigo-500">
        <h2 className="fs-4">PC Builder</h2>
        <p className="description">
          PC Builder and the PC Builder logo are registered patents and trademarks of PC Builder. All other names,
          brands, products or services are trademarks or registered trademarks of their respective owners.
        </p>
        <div className=" list-group">
          <div className="d-flex flex-row gap-2">
            <i className="bi bi-envelope"></i>
            <a
              href="mailto:pcbuilder@me.com"
              className="text-opacity-75"
            >
              pcbuilder@me.com
            </a>
          </div>
          <div className="d-flex flex-row gap-2">
            <i className="bi bi-telephone"></i>
            <a
              href="tel:0236-0000-000"
              className="text-opacity-75"
            >
              0236-0000-000
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
