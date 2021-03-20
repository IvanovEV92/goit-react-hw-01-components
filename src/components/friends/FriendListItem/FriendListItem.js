import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';
const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const activeClass = isOnline
    ? styles.friendListItem__active
    : styles.friendListItem__disable;
  return (
    <li className={styles.friendListItem} key={id}>
      <span className={activeClass}></span>
      <img src={avatar} alt="" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
