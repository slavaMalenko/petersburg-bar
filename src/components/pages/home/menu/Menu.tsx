import React from 'react';
import { css } from 'styled-components';
import { Title, WhitePlate } from '../../../../ui';
import { Slider } from './slider';

export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 70px auto 30px;
  font-weight: 900;
`;

const Menu: React.FC = ({}) => {
  return (
    <>
      <WhitePlate
        title='Top “Manhattan” menu'
        commonStyles={SWhitePlateStyles}
        scrollToTitle
      />

      <Title text='Кухня' />
      <Slider />
    </>
  );
};

export { Menu };
