import PropTypes from 'prop-types';

import {Section, Container} from 'constants/index'
import { List, Item, Avatar, Status, FriendName } from './FriendList.styled';
import {imageSize} from 'constants'


export function FriendList({ friends }) {
     
    return <Section>
         <Container>
             <List>
                {friends.map(({id, name, isOnline, avatar}) => {
                    return <Item key={id}>
                        <Status webStatus={isOnline}>{isOnline}</Status>
                    <Avatar src={avatar} alt={avatar + ' avatar'}  width={imageSize.small.width}
              height={imageSize.small.height} />
                        <FriendName >{name}</FriendName>
                    </Item>
                })}
            </List>
         </Container>
     </Section>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}