// import { Box } from 'components/Box';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  StatsList,
  StatsItem,
  StatsQuantity,
  Username,
  TagStyle,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Box display="flex" flexDirection="column" alignItems="center" p={5}>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <TagStyle>@{tag}</TagStyle>
        <p>{location}</p>
      </Box>

      <Box bg="grey">
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
      </Box>
    </ProfileCard>
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
