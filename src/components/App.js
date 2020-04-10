import React, { Fragment } from 'react';
import '../css/style.css';
import Description from './profile/Description';
import Stats from './profile/Stats';
import Statistic from './statistic/Statistic';
import FriendList from './friend/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import user from '../user.json';
import statisticalData from '../statistic-data.json';
import friendData from '../friends.json';
import transactions from '../transactions.json';

const App = () => (
  <Fragment>
    <div class="profile">
      <Description
        urlImg={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
    <Statistic title="Upload stats" stats={statisticalData} />
    <FriendList friends={friendData} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;
