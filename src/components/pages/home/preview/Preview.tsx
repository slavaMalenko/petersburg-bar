import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import photo_preview from './img/photo_preview.png';
import {
  MWhitePlate,
  animationVariants,
  flexStyles,
  textStyles,
} from '../../../../ui';
import { Concerts } from './Concerts/Concerts';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textTransformUppercase } =
  textStyles;
const appearanceOnTheLeft = animationVariants.appearanceOnTheLeft;

const SPreviewContent = styled(motion.section)`
  ${displayFlex}
  ${justifySpaceBetween}
`;
const SPreviewImg = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px rgb(45, 19, 13);
  margin-top: 40px;
  width: 65%;
  height: 500px;
  background: url(${photo_preview}) no-repeat 50%;
  background-size: 100%;
`;
export const SWhitePlateStyles = css`
  width: 150px;
  position: absolute;
  top: 300px;
  left: 60px;
  opacity: 0.6;

  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
`;
const SPreviewShortTag = styled(motion.section)`
  position: absolute;
  top: 360px;
  left: 60px;
  width: 400px;

  ${textTransformUppercase}
  font-size: 50px;
  font-weight: 700;
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
`;

export const Preview: React.FC = ({}) => {
  return (
    <SPreviewContent initial='hidden' whileInView='visible'>
      <SPreviewImg>
        <MWhitePlate
          custom={1}
          variants={appearanceOnTheLeft(0.5)}
          title='Since 1996'
          commonStyles={SWhitePlateStyles}
        />
        <SPreviewShortTag custom={2} variants={appearanceOnTheLeft()}>
          True. Fontanka. Underground.
        </SPreviewShortTag>
      </SPreviewImg>

      <Concerts />
    </SPreviewContent>
  );
};
