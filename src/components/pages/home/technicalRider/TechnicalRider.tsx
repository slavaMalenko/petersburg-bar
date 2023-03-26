import React from 'react';
import styled, { css } from 'styled-components';
import { Title, WhitePlate, displayFlex } from '../../../../ui';
import { TechnicalRiderList } from './TechnicalRiderList';

const SContainer = styled.div`
  ${displayFlex}
`;
const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
  font-weight: 900;
`;

export const TechnicalRider: React.FC = ({}) => (
  <section>
    <WhitePlate
      title='Top “Manhattan” party'
      commonStyles={SWhitePlateStyles}
      scrollToTitle
    />
    <Title text='Техрайдер' />

    <SContainer>
      <TechnicalRiderList />
    </SContainer>
  </section>
);
