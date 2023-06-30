import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import { data, friends, user, transactions } from 'data';

export const App = () => {
  return (
    <div className="container">
      <div className="upper-section-wrapper">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
        <Statistics title="Upload stats" stats={data} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};
