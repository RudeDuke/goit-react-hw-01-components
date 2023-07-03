import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status_ind = clsx(styles.status_ind, {
    [styles.is_online]: isOnline,
    [styles.is_offline]: !isOnline,
  });

  return (
    <li className={styles.item}>
      <div className={styles.avatar_wrapper}>
        <div className={status_ind}></div>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
      </div>
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
