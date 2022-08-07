import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

//each section wrap into Box and give styles 
//box for general wrapper for display margin padding  flex grid 
export const App = () => {
  return (
    <>
     <GlobalStyle />
      <Box display="flex"
        alignItems='flex-start'
        justifyContent='space-between'
        p='20px'>
        
    <Box p='20px'>
        <Profile
          
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
          stats={user.stats} />
        </Box>

        <Box p='20px'>
    <Statistics title="Upload stats" stats={data}
          />
        </Box>
    
        <Box p='20px'>
          <FriendList friends={friends} />
        </Box>
        
        <Box p='20px'>
          <TransactionHistory items={transactions} />
          </Box>
    </Box>
  </>
  );

};
