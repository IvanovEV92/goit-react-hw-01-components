import defaultImg from './avatar.png';
import PropTypes from 'prop-types';
import style from './profile.module.css';
const Profile = ({
  name,
  tag,
  avatar,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <section className={style.profile}>
      <div className={style.profile__information}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={style.profile__image}
        />

        <p className={style.profile__name}>{name}</p>
        <p className={style.profile__tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.profile__list}>
        <li className={style.profile__item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={style.profile__item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={style.profile__item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
  location: 'Ukraine',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
export default Profile;
