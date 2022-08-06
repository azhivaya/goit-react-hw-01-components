import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
text-transform: uppercase;
margin-bottom: ${p => p.theme.space[3]}px;

`

export const StatList = styled.ul`
display: flex;
 align-items: center;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
 align-items: center;
margin-right: ${p => p.theme.space[3]}px;`