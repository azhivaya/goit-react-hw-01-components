// import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  StatsList,
  StatsItem,
  StatsQuantity,
  Username,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    // <Box p='20px'>
    <div className="profile">
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </div>
    // </Box >
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
