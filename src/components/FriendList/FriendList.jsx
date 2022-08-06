// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {

    return (
        <Box mb='20px'>
        <ul className="friend-list">
        
        {friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
      )
        
    )}
            </ul>
            </Box>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
})).isRequired,
}