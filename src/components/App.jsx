
import { ThemeProvider } from '@emotion/react';
import {theme} from 'constants'


import user from 'data/user.json';
import statsData from 'data/statsData.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
<div>
      <ThemeProvider theme={theme}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
  
        <Statistics title="Upload stats" stats={statsData} />
  
        <FriendList friends={friends} />
  
        <TransactionHistory items={transactions} />
      </ThemeProvider>
</div>
  );
};
