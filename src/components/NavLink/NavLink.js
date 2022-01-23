import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

const NavLink = ({children}) => {
  return (
  	<Wrapper>
  	  <NonBoldChild>
  	    {children}
  	  </NonBoldChild>
  	  <BoldChild>
  	    {children}
  	  </BoldChild>
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

  &:hover *:first-child {
  	transform: translateY(-100%);
  }

  &:hover *:nth-child(2) {
  	transform: translateY(0%);
  }
`;

const NonBoldChild = styled.span`
  transition: transform 500ms;
`

const BoldChild = styled.span`
  transition: transform 500ms;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  transform: translateY(100%);
`

export default NavLink;