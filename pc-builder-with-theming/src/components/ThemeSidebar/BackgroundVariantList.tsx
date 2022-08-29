const BackgroundVariantList = ({ backgroundCollection, selectingBackground, handleChangeBackground }) => {
  const backgroundName = Object.keys(backgroundCollection);

  const onChangeBackground = (background) => () => {
    handleChangeBackground(background);
  };
  return (
    <div className="d-flex position-relative flex-start flex-1 gap-2 flex-wrap">
      {backgroundName.map((name) => (
        <div
          key={name}
          role="button"
          tabIndex={0}
          onClick={onChangeBackground(name)}
          className={`position-relative ${name === selectingBackground ? 'clip-image' : ''}`}
        >
          <img
            src={backgroundCollection[name]}
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};
export default BackgroundVariantList;
