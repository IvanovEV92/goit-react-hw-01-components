import Container from './components/container/Container';
import Profile from './components/Profile/Profile';
import Statistic from './components/statistics/Statistic';
import FriendList from './components/friends/friends-list/Friend-list';
import TransactionHistory from './components/transaction/TransactionHistory';
// Данные
import user from './components/Profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friends/friends-list/friends.json';
import transactions from './components/transaction/transaction.json';
console.log(transactions);
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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
export default App;
