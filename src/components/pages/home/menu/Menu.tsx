import React from 'react';
import { css } from 'styled-components';
import { Button, Title, WhitePlate } from '../../../../ui';
import { Slider } from './slider';
import { useNavigate } from 'react-router-dom';
import { setNavigationActive, useAppDicpatch } from '../../../../store';

export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 70px auto 30px;
  font-weight: 900;
`;

const Menu: React.FC = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDicpatch();
  const toMenu: () => void = () => {
    navigate('/menu');
    dispatch(setNavigationActive('/menu'));
  };
  return (
    <>
      <WhitePlate
        title='Top “Manhattan” menu'
        commonStyles={SWhitePlateStyles}
        scrollToTitle
      />

      <Title text='Кухня' />
      <Slider />
      <Button
        onClick={toMenu}
        marginBottom={20}
        text='Всё меню'
        center
        hoverRight
      />
    </>
  );
};

export { Menu };
