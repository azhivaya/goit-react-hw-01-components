import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.deepGrey};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Username = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const TagStyle = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;
export const StatsList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[4]}px; ;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
export const StatsQuantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
