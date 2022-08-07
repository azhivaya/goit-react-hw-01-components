import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

//each section wrap into Box and give styles
//box for general wrapper for display margin padding flex grid
export const App = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      p="20px"
    >
      <Box>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      {/* bg='grey' */}
      <Box>
        <Statistics title="Upload stats" stats={data} />
      </Box>

      <Box>
        <FriendList friends={friends} />
      </Box>

      <Box>
        <TransactionHistory items={transactions} />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
