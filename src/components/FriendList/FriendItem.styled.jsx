import styled from '@emotion/styled';
import { getRandomHex } from 'components/statistics/Statistics';

export const Friend = styled.li`
  display: flex;
  flex-direction: column;
  justifu-content: center;
  padding: 3px;
  border: 1px solid black;
  width: 100px;
  background-color: #fff;
  border-radius: 5%;
`;

export const Avatar = styled.img`
display: block;
margin: 0 auto;
width: 60px;
background-color: ${getRandomHex};
border-radius: 50%`



export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: auto;
  background-color: ${({ online }) => {
  return online === true ? 'green' : 'red'
  }};
`;

export const Nickname = styled.p`
display: block;
text-align: center;
`