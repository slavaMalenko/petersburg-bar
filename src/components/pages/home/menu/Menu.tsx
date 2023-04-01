import React from 'react';
import { motion } from 'framer-motion';
import { css } from 'styled-components';
import { MButton, MTitle, MWhitePlate, animation } from '../../../../ui';
import { MSlider } from './slider';
import { useNavigate } from 'react-router-dom';
import { setNavigationActive, useAppDicpatch } from '../../../../store';

const appearanceOnTheTop = animation.appearanceOnTheTop;
export const SWhitePlateStyles = css`
  font-size: 16px;
  max-width: 240px;
  margin: 40px auto 30px;
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
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.15 }}
    >
      <MWhitePlate
        custom={1}
        variants={appearanceOnTheTop()}
        title='Top “Manhattan” menu'
        commonStyles={SWhitePlateStyles}
        scrollToTitle
      />

      <MTitle text='Кухня' custom={2} variants={appearanceOnTheTop()} />
      <MSlider custom={3} variants={appearanceOnTheTop()} />
      <MButton
        custom={4}
        variants={appearanceOnTheTop(undefined, 0.2)}
        onClick={toMenu}
        marginBottom={20}
        text='Всё меню'
        center
      />
    </motion.section>
  );
};

export { Menu };
