import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MDescription } from './Description';
import { animationVariants, commonStyles, flexStyles } from '../../../../ui';
import Rectangle from './img/Rectangle.png';
import { setNavigationActive, useAppDicpatch } from '../../../../store';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { cursorGrab, cursorGrabbing } = commonStyles;
const { appearanceOnTheTop } = animationVariants;

const descriptionList = [
  'Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.',
  'Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.',
  'Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.',
];

const SContainer = styled(motion.section)`
  ${displayFlex}
  ${justifySpaceBetween}
  margin: 40px 0px 65px;
`;
const SImg = styled(motion.img)`
  width: 33.3%;
  ${cursorGrab}

  &:active {
    ${cursorGrabbing}
  }
`;

export const AboutEstablishments: React.FC = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDicpatch();
  return (
    <SContainer
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      <MDescription
        custom={1}
        variants={appearanceOnTheTop()}
        plateTitle='Top “Manhattan” events'
        blockTitle='Банкеты'
        descriptionList={descriptionList}
        onClick={() => {
          navigate('/cooperation');
          dispatch(setNavigationActive('/cooperation'));
        }}
      />
      <SImg
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        custom={2}
        variants={appearanceOnTheTop()}
        src={Rectangle}
      />
      <MDescription
        custom={3}
        variants={appearanceOnTheTop()}
        plateTitle='Top “Manhattan” tourists'
        blockTitle='Туристы'
        descriptionList={descriptionList}
      />
    </SContainer>
  );
};
