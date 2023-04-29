import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({friends}) {
    return <ul className={css.friendList}>
        {friends.map(({id, name, isOnline, avatar}) => {
            return <li key={id} className={css.item}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={avatar + ' avatar'}  width="48" />
                <p className={css.name}>{name}</p>
            </li>
        })}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}