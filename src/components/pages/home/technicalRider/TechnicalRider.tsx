import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import {
  MTitle,
  MWhitePlate,
  appearanceOnTheTop,
  displayFlex,
  justifyCenter,
} from '../../../../ui';
import { TechnicalRiderList } from './TechnicalRiderList';
import { SoundEngineers } from './SoundEngineers';

const Section = styled(motion.section)`
  margin-bottom: 300px;
`;
const SContainer = styled.div`
  ${displayFlex}
  ${justifyCenter}
`;
const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
  font-weight: 900;
`;

export const TechnicalRider: React.FC = ({}) => (
  <Section initial='hidden' whileInView='visible' viewport={{ amount: 0.1 }}>
    <MWhitePlate
      custom={1}
      variants={appearanceOnTheTop()}
      title='Top “Manhattan” party'
      commonStyles={SWhitePlateStyles}
      scrollToTitle
    />
    <MTitle custom={2} variants={appearanceOnTheTop()} text='Техрайдер' />

    <SContainer>
      <TechnicalRiderList />
      <SoundEngineers />
    </SContainer>
  </Section>
);
