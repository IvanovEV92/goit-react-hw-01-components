import PropTypes from 'prop-types';
import style from './statistic.module.css';
const Statistic = ({ title, stats }) => {
  return (
    <section className={style.statistic}>
      {title && (
        <h2 className={style.statistic__title}>{title.toUpperCase()}</h2>
      )}
      <ul className={style.statistic__list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.statistic__item}
            style={{
              backgroundColor: backgroundRandom(),
            }}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
const backgroundRandom = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

Statistic.defaultProps = {
  title: '',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistic;
