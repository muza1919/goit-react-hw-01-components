import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendsList } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (<FriendsList>
        {friends.map(friend => {
            return <FriendItem key={friend.id} avatar={friend.avatar} name={ friend.name} isOnline={friend.isOnline} />
        })}
    </FriendsList>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}