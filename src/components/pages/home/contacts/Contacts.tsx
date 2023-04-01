import React from 'react';
import { motion } from 'framer-motion';
import { css } from 'styled-components';
import { MTitle, MWhitePlate, appearanceOnTheTop } from '../../../../ui';

export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
  font-weight: 900;
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
    </motion.section>
  );
};

export { Contacts };
