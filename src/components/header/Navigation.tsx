import React from 'react';
import { Link } from 'react-router-dom';
import styled, { StyledProps } from 'styled-components';
import { NavigationItems, TChangeActiveItem } from './Header';
import { navigationState } from '../../store';

type TNavigationProps = StyledProps<{
  isActive: boolean;
}>;

const SNavigationItem = styled(Link)(
  ({ isActive }: TNavigationProps) => `
    padding: 0 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    text-decoration: none;
    transition: all 0.3s;
    color: #fff;
    &: hover {
      color: rgb(213, 98, 29);
    }
    ${isActive && `color: rgb(213, 98, 29)`}
  `
);

const SNavigation = styled.div`
  display: flex;
  align-items: center;
`;

interface ISNavigation extends navigationState {
  items: NavigationItems[];
  changeActiveItem: TChangeActiveItem;
}
const Navigation: React.FC<ISNavigation> = ({
  items,
  activeNavigation,
  changeActiveItem,
}) => (
  <SNavigation>
    {items.map(({ name, link }) => (
      <SNavigationItem
        to={link}
        isActive={activeNavigation === link}
        onClick={() => changeActiveItem(link)}
        key={`${name}${link}`}
      >
        {name}
      </SNavigationItem>
    ))}
  </SNavigation>
);

export { Navigation };
