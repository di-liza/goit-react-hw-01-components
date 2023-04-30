import styled from '@emotion/styled';


export const ProfileCard = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: ${(props) => `0px 2px 4px ${props.theme.colors.boxShadowColor}`};
  padding: 20px;
  width: 300px;
  margin: 20px auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
  border: ${(props) => `0px 2px 4px ${props.theme.colors.grey}`};
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;
export const UserInfo = styled.p`
   font-size: 16px;
  margin: 0;
`;

export const StatsList = styled.ul`
   display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 4px;
  padding: 10px;
  width: 80px;
  border: 1px solid #00eaff;
`;

export const StatsLabel = styled.span`
   font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
`;
export const StatsQuantity = styled.span`
   font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;
