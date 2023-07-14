import styled from '@emotion/styled'
import { getRandomHex } from './Statistics';

export const Container = styled.section`
  width: 350px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #BAD5FB;
  border: 1px solid black;
`;

export const List = styled.ul`
  padding: 10px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  color: black;
  text-transform: uppercase;
`;

export const Item = styled.li`
  display: block;
  width: 50px;
  height: 50px;
  background-color: ${getRandomHex};
  border: 1px solid black;
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-weight: 600;
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  font-style: italic;
`;