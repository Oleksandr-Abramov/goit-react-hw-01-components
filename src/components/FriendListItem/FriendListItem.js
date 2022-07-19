import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const markerClass = isOnline ? s.green : s.red;
  return (
    <li className={s.item}>
      <span className={markerClass}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
