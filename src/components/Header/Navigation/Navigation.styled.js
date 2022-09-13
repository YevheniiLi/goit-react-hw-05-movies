import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { GiBatMask } from 'react-icons/gi';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const NavigationListItem = styled.li`
  :not(:last-child) {
    margin-right: 40px;
    
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m};;
  line-height: 1.2;
  color: ${p => p.theme.colors.green};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  
  &.active {
    color: ${p => p.theme.colors.red};
  }
`;

export const NavigationLinkIconHome = styled(GoHome)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const NavigationLinkIconMovie = styled(GiBatMask)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
