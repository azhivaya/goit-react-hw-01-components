import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/getRandomHexColor';
import { StatisticsTitle, StatList } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={4}
      border="deepGrey"
      // border="normal"
      // borderColor="accent"
    >
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Box
            key={id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg={getRandomHexColor()}
            p={3}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </Box>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
