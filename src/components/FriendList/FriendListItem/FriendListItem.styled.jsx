import styled from 'styled-components';

export const FriendItem = styled.li`
display: flex;
align-items: baseline;

margin-bottom: ${p => p.theme.space[3]}px;
`

export const OnlineStatus = styled.span`
width: 20px;
display: block;

height: 20px;
border-radius: ${p => p.theme.radii.round};
background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
}}

`

//${({isOnline}) => {return isOnline ? 'green' : 'red'}}