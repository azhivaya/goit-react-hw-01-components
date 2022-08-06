import PropTypes from 'prop-types';

//title ? title : ''

export const Statistics = ({ title, stats}) => {
  return (<section className="statistics">
      {title && <h2 className="title">{title}</h2>} 
    
    

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
    </li>
      )
        
      )}
    {/* <li className="item">
                <span className="label">{stats.label}</span>
                <span className="percentage">{stats.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </li> */}
  </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
}

//stats: PropTypes.arrayOf(PropTypes.object).isRequired,