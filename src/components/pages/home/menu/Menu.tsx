import React from 'react';
import { css } from 'styled-components';
import { WhitePlate } from '../../../../ui';

export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 100px auto 20px;
  font-weight: 900;
`;

const Menu: React.FC = ({}) => {
  return (
    <>
      <WhitePlate
        title='Top “Manhattan” menu'
        commonStyles={SWhitePlateStyles}
      />
    </>
  );
};

export { Menu };
