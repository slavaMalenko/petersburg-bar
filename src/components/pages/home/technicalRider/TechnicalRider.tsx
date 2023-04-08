import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { MTitle, MWhitePlate, animation, flexStyles } from '../../../../ui';
import { TechnicalRiderList } from './TechnicalRiderList';
import { SoundEngineers } from './SoundEngineers';

const { displayFlex, justifyCenter } = flexStyles;

const Section = styled(motion.section)`
  margin-bottom: 30px;
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

const { appearanceOnTheTop } = animation;
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
