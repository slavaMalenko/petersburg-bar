import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import {
  MTitle,
  MWhitePlate,
  animation,
  commonStyles,
  flexStyles,
} from '../../../../ui';
import { ContactsInfo } from './ContactsInfo';
import preview_map from './img/preview_map.png';

const { appearanceOnTheTop } = animation;
export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
  font-weight: 900;
`;
const { displayFlex, justifySpaceBetween } = flexStyles;
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
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.15 }}
    >
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
    </motion.section>
  );
};

export { Contacts };
