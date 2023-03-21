import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';
import {
  colorWhite,
  fontFamilySofiaSansSemiCondensed,
  textTransformUppercase,
} from '../../ui';
import {
  setNavigationActive,
  useAppDicpatch,
  useAppSelector,
} from '../../store';
import { Navigation } from './Navigation';

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
`;
const SLogo = styled.div`
  width: 160px;
  height: 40px;
  background: url(${logo}) no-repeat 50%;
  background-size: 100%;
`;
const SButton = styled.div`
  padding: 10px 30px;
  border: 2px solid #d5621d;
  border-radius: 5px;
  ${textTransformUppercase}
  cursor: pointer;

  transition: all linear 0.3s;
  &: hover {
    background-color: rgb(213, 98, 29);
  }
`;

export type NavigationItems = {
  name: string;
  link: string;
};

export type TChangeActiveItem = (item: string) => void;

const navigationItems: NavigationItems[] = [
  { name: 'Главная', link: '/' },
  { name: 'Меню', link: '/menu' },
  { name: 'Афиша', link: '/poster' },
  { name: 'Сотрудничество', link: '/cooperation' },
  { name: 'Галерея', link: '/gallery' },
  { name: 'Новости', link: '/news' },
];

const Header: React.FC = ({}) => {
  const dispatch = useAppDicpatch();
  const { activeNavigation } = useAppSelector(
    ({ navigation: { activeNavigation } }) => ({
      activeNavigation,
    })
  );

  const changeActiveItem: TChangeActiveItem = (item) => {
    dispatch(setNavigationActive(item));
    localStorage.setItem('path', item);
  };

  return (
    <SHeader>
      <SLogo />
      <Navigation
        items={navigationItems}
        activeNavigation={activeNavigation}
        changeActiveItem={changeActiveItem}
      />
      <SButton>Бронирование</SButton>
    </SHeader>
  );
};

export { Header };
