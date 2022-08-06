import PropTypes from 'prop-types';
import { StatisticsTitle, StatList, StatItem } from './Statistics.styled';
import { Box } from '../Box';

//title ? title : ''
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
export const Statistics = ({ title, stats}) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        
      mb='40px'>
      {title && <StatisticsTitle>{title}</StatisticsTitle>} 

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
    </StatItem>
      )
      )}
  </StatList>
      </Box>
      </>)
    
}

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
}
