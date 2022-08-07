import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.deepGrey};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
