import PropTypes from 'prop-types';

import { Section, Container } from 'constants/index';
import {StatsQuantity, StatsLabel, StatsItem, ProfileCard, Description, UserAvatar, UserName, UserInfo, StatsList} from './Profile.styled'
import {imageSize} from 'constants'

export function Profile({ username, tag, location, avatar, stats }) {
    return <Section>
       <Container>
         <ProfileCard key={tag}>
      <Description>
        <UserAvatar
          src={avatar}
              alt={username + ' avatar'}
              width={imageSize.middle.width}
              height={imageSize.middle.height}
        />
        <UserName >{username}</UserName>
        <UserInfo >@{tag}</UserInfo>
        <UserInfo >{location}</UserInfo>
      </Description>
    
      <StatsList>
        <StatsItem>
          <StatsLabel >Followers</StatsLabel>
                    <StatsQuantity >{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel >Views</StatsLabel>
          <StatsQuantity >{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel >Likes</StatsLabel>
          <StatsQuantity >{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
       </Container>
 </Section>
}

Profile.propTypes = {
  
        username: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        
        stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        }).isRequired,
        
}


 