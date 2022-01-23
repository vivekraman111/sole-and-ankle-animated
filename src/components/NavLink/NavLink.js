import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
  	<Wrapper {...delegated}>
  	  <MainText>
  	    {children}
  	  </MainText>
  	  <HoverText>
  	    {children}
  	  </HoverText>
  	</Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MainText = styled.span`
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference){
    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 350ms;
    }
  }
`

const HoverText = styled.span`
  transition: transform 500ms;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  transform: translateY(100%);

  @media (prefers-reduced-motion: no-preference){
    ${Wrapper}:hover & {
      transform: translateY(0%);
      transition: transform 350ms;
    } 
  }
`

export default NavLink;