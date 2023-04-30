import styled from '@emotion/styled';


export const StatTitle = styled.h2`
 font-size: 28px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
`;

export const StatisticsList = styled.ul`
display: flex;
 gap: 15px;
  justify-content: center;
`;

export const StatisticsItem = styled.li`
 width: 150px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  box-shadow: ${(props) => `0px 2px 4px ${props.theme.colors.boxShadowColor}`};
`;

export const StatsLabel = styled.span`
 font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
`;
export const StatsPercentage = styled.span`
 font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;
