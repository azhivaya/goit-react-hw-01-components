import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  return (<div>
    <Profile
      key={user.tag}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    
    <Statistics key={data.id} title="Upload stats" stats={data}
    />
    
    <FriendList key={friends.id} friends={friends} />

    <TransactionHistory key={transactions.id} items={transactions} />

  </div>);

  // return (
  //   <div> {user.map(({username, tag, location, avatar, stats}) => (
  //     <Profile key={tag}
  //       username={username}
  //       tag={tag}
  //       location={location}
  //       avatar={avatar}
  //       stats={stats}
  //     />
  //   ))}

  //   </div>
  // )
};
