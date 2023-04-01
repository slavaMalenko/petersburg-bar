import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { MTitle, flexStyles, animation } from '../../../../ui';
import { useAppSelector } from '../../../../store';
import { SoundEngineer } from './SoundEngineer';

const { displayFlex, alignItemsCenter, flexDirectionColumn } = flexStyles;

const SContainer = styled(motion.div)`
  width: 45%;
  ${displayFlex}
  ${flexDirectionColumn}
  ${alignItemsCenter}
`;
const SSoundEngineers = styled(motion.div)`
  ${displayFlex}
  ${alignItemsCenter}
`;
const SoundEngineersStyles = css`
  font-size: 34px;
  width: 370px;
  letter-spacing: 2px;
`;

export const SoundEngineers: React.FC = ({}) => {
  const { soundEngineers } = useAppSelector(
    ({ soundEngineers: { soundEngineers } }) => ({
      soundEngineers,
    })
  );
  return (
    <SContainer
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      <MTitle
        custom={1}
        variants={animation.appearanceOnTheTop()}
        commonStyles={SoundEngineersStyles}
        text='Звукорежиссеры клуба МАНХЭТТЕН'
      />

      <SSoundEngineers>
        {soundEngineers.map((soundEngineer) => (
          <SoundEngineer data={soundEngineer} />
        ))}
      </SSoundEngineers>
    </SContainer>
  );
};
