import classNames from 'classnames';

const ImageItem = ({ item, onClick, isActive }) => {
  const itemClasses = classNames({
    'item-img': true,
    'item-img--active': isActive
  });

  return(
    <div className={itemClasses}>
      <img src={item.icon} onClick={onClick} />
    </div>
  );
};

export default ImageItem;