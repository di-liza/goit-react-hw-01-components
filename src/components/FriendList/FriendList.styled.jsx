import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
    display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  border-radius: 4px;
  box-shadow: ${(props) => `0px 2px 4px ${props.theme.colors.boxShadowColor}`};
  margin-bottom: 15px;
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.blue};
`;
export const Avatar = styled.img`
    width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Status = styled.span`
    width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;

  background-color: ${({ webStatus, theme }) => {
    return webStatus?theme.colors.green:theme.colors.red
  }};
`;

export const FriendName = styled.p`
    font-size: 20px;
  font-weight: bold;
`;