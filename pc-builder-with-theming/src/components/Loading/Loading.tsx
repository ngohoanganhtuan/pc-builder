/**
 * @type { Object }
 * @property { boolean } isFetching - Fetching status
 * @property { ReactElement | ReactElement[] } - React children
 */
type Props = {
  isFetching: boolean;
  children: React.ReactNode;
};

/**
 * This component represents Loading
 */
export const Loading = ({ isFetching = true, children }: Props) => {
  if (isFetching) {
    return (
      <div
        className="spinner-border align-self-center m-auto"
        role="status"
      ></div>
    );
  }

  return <>{children}</>;
};
