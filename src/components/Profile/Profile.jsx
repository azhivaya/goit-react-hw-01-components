// Описание компонента <Profile>
// Компонент должен принимать несколько пропсов с информацией о пользователе:

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.
import PropTypes from 'prop-types';

//className with {css.avatar} all className comes from css

export const Profile = ({avatar, username, tag, location, stats } ) => {
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="username">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>);
}

// username with isRequired has a mistake in console that value is undefined 
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}