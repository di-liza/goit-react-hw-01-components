import PropTypes from 'prop-types';

import {Section, Container} from 'constants/index'
import { StatsPercentage, StatsLabel, StatisticsItem, StatisticsList, StatTitle } from './Statistics.styled';

import { getRandomHexColor } from 'utils/getRandomColor';


export function Statistics({ title, stats }) {
    return <Section >
        <Container>
            <StatTitle >{title}</StatTitle>
    
            <StatisticsList >
                {stats.map(stat => <StatisticsItem key={stat.id} style={{backgroundColor: `${getRandomHexColor()}`}} >
                    <StatsLabel >{stat.label}</StatsLabel>
                    <StatsPercentage >{stat.percentage}%</StatsPercentage>
                </StatisticsItem>)}
            </StatisticsList>
        </Container>
</Section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}


