import styled from '@emotion/styled';

export const Transactions = styled.table`
width: 400px;
background-color: #fff;
margin: 20px auto 0;
`
export const Header = styled.th`
font-size: 18px;
font-weight: 700;
background-color: #BAD5FB;
text-transform: uppercase;
`

export const Row = styled.tr`
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  color: black;
  &:nth-of-type(2n) {
    background-color: #F1EFEF;
  }
`;

export const Tdata = styled.td`
  border: 0.5px solid black;
`;