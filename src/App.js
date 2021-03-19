import Container from './components/container/Container';
import Profile from './components/Profile/Profile';
import Statistic from './components/statistics/Statistic';
import user from './components/Profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
    </Container>
  );
};
export default App;
