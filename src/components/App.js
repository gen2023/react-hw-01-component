import React, { Fragment } from 'react';
import '../css/style.css';
import Profile from './profile/Profile';
import Statistic from './statistic/Statistic';
import FriendList from './friend/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import user from '../user.json';
import statisticalData from '../statistic-data.json';
import friendData from '../friends.json';
import transactions from '../transactions.json';

const App = () => (
  <Fragment>
    <Profile
      urlImg={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />

    <Statistic title="Upload stats" stats={statisticalData} />
    <FriendList friends={friendData} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;
