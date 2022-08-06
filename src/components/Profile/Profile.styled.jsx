import styled from 'styled-components';


export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Username = styled.p`
font-weight: ${p => p.theme.fontWeights.bold}
`

export const Avatar = styled.img`
width: 50px;
height: 50px;
`
export const StatsList = styled.ul`
display: flex;
justify-content: center;
` 
export const StatsItem = styled.li`
display: flex;
  flex-direction: column;
  margin-right: ${p => p.theme.space[3]}px;
    align-items: center;
  
`
export const StatsQuantity = styled.span`
font-weight: ${p => p.theme.fontWeights.bold}
`
