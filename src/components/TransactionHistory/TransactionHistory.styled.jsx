import styled from '@emotion/styled';


export const TransactionHistoryTab = styled.table`
 border-collapse: collapse;
  margin: 0 auto;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const TableHeading = styled.th`
 color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  text-align: center;
  padding: 10px 105px;
  border: ${(props) => `1px solid ${props.theme.colors.tableBorder}`};
`;


export const TableCell = styled.td`
 /* background-color: ${(props) => props.theme.colors.blue}; */
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;

  padding-left: 105px;
  border: ${(props) => `1px solid ${props.theme.colors.tableBorder}`};
`;

export const TableRow = styled.tr`
background-color: ${(props) => props.theme.colors.blue}; 
  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.colors.tableBlue};
  }
`;