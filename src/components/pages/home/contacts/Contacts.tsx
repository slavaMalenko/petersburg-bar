import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import {
  MTitle,
  MWhitePlate,
  animationVariants,
  commonStyles,
  flexStyles,
} from '../../../../ui';
import { ContactsInfo } from './ContactsInfo';
import preview_map from './img/preview_map.png';

const { appearanceOnTheTop } = animationVariants;
export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
  font-weight: 900;
`;
const { displayFlex, justifySpaceBetween } = flexStyles;
const Section = styled(motion.section)`
  margin: 0 0 100px;
`;
const SContactsContainer = styled(motion.div)`
  ${commonStyles.overflowHidden}
  ${displayFlex}
  ${justifySpaceBetween}
  margin-bottom: 40px;
`;
const SContactsMap = styled(motion.div)`
  width: 60%;
  background-size: cover;
  background: url(${preview_map}) no-repeat 50%;
`;

const Contacts: React.FC = ({}) => {
  return (
    <Section initial='hidden' whileInView='visible' viewport={{ amount: 0.15 }}>
      <MWhitePlate
        custom={1}
        variants={appearanceOnTheTop()}
        title='Top “Manhattan” place'
        commonStyles={SWhitePlateStyles}
        scrollToTitle
      />
      <MTitle text='Контакты' custom={2} variants={appearanceOnTheTop()} />

      <SContactsContainer>
        <ContactsInfo />
        <SContactsMap />
      </SContactsContainer>
    </Section>
  );
};

export { Contacts };
