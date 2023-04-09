import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  MTelegramIcon,
  MVkIcon,
  flexStyles,
  animationVariants,
  textStyles,
  commonStyles,
} from '../../../../ui';
import { soundEngineer } from '../../../../store';

const {
  displayFlex,
  alignItemsCenter,
  flexDirectionColumn,
  justifySpaceAround,
} = flexStyles;
const { hoverFrame, pointer, selectNone } = commonStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textTransformUppercase } =
  textStyles;
const { appearanceOnTheLeft, appearanceOnTheRight } = animationVariants;

const SName = styled(motion.div)`
  ${colorWhite};
  ${fontFamilySofiaSansSemiCondensed};
  ${textTransformUppercase};
  font-weight: 700;
  margin-bottom: 7px;
  z-index: 100;
  transition: all 0.2s linear;
`;
const SContainer = styled(motion.div)`
  ${displayFlex};
  ${flexDirectionColumn};
  ${alignItemsCenter};
  ${pointer};
  ${hoverFrame};
  ${selectNone}
  padding: 20px;
  &:hover {
    transform: scale(1.03);
  }
  &:hover ${SName} {
    color: rgba(213, 98, 29, 1);
  }
`;
const SImg = styled(motion.img)`
  width: 170px;
  height: 185px;
  margin-bottom: 25px;
  z-index: 100;
`;
const SIcons = styled(motion.div)`
  ${displayFlex};
  ${justifySpaceAround};
  width: 70%;
  margin-top: 20px;
`;

interface ISoundEngineer {
  data: soundEngineer;
}
export const SoundEngineer: React.FC<ISoundEngineer> = ({
  data: { photo, name, surname },
}) => {
  const [rotate, setRotate] = useState<boolean>(false);
  return (
    <SContainer
      initial='hidden'
      onClick={() => setRotate(!rotate)}
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      <SImg
        src={photo}
        animate={{ rotate: rotate ? 360 : 0, scale: rotate ? 0.85 : 1.05 }}
      />

      <SName variants={appearanceOnTheRight(undefined, 0.2)}>{surname}</SName>
      <SName variants={appearanceOnTheLeft(undefined, 0.2)}>{name}</SName>

      <SIcons>
        <MTelegramIcon variants={appearanceOnTheRight(undefined, 0.2, 0.02)} />
        <MVkIcon variants={appearanceOnTheLeft(undefined, 0.2, 0.02)} />
      </SIcons>
    </SContainer>
  );
};
