import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  animationVariants,
  animationBlock,
  commonStyles,
  textStyles,
} from '../../../../ui';

const { appearanceOnTheLeft } = animationVariants;
const { selectNone, pointer } = commonStyles;
const { textTransformUppercase, fontFamilySofiaSansSemiCondensed, colorWhite } =
  textStyles;
const SContainer = styled(motion.div)`
  width: 30%;
  padding: 40px;
  background: rgba(213, 98, 29, 0.2);
  border: 2px solid #d5621d;
  border-radius: 5px;
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
`;
const SInfoBlock = styled(motion.div)`
  margin-left: 0;
  margin-bottom: 25px;
  transition: all 0.2s linear;
  ${pointer}
  &:hover {
    margin-left: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const SInfoBlockTitle = styled(motion.h1)`
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 15px;
  ${selectNone}
  ${textTransformUppercase}
`;
const SInfoBlockDescription = styled(motion.p)`
  font-weight: 400;
  font-size: 16px;
`;
const SInfoBlockDivider = styled(motion.div)`
  width: 100%;
  height: 1px;
  margin: 25px 0;
  background: #fff;
`;

type infoItem = { title: string; descrition: string; dividingLine?: boolean };
const info: infoItem[] = [
  {
    title: 'Адрес',
    descrition: 'Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)',
  },
  {
    title: 'Телефон',
    descrition: '+7 (812) 713-1945',
  },
  {
    title: 'Режим работы',
    descrition: 'Ежедневно с 12:00 до 06:00',
    dividingLine: true,
  },
  {
    title: 'Директор',
    descrition: 'Лидия Эмильевна, +7(921) 963-55-50',
  },
  {
    title: 'Арт-директор',
    descrition: 'Илиния Ионашко, +7(981) 989-43-30',
  },
];

const ContactsInfo: React.FC = ({}) => {
  const getAnimateBlock: (
    args: Omit<animationBlock.TAnimateBlock, 'animation'>
  ) => ReactNode = ({ block, custom, children }) =>
    animationBlock.getAnimateBlock({
      block,
      custom,
      children,
      animation: appearanceOnTheLeft(),
    });

  return (
    <SContainer
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      {info.map(({ title, descrition, dividingLine }: infoItem, index) => (
        <SInfoBlock key={`${descrition} ${index}`}>
          {getAnimateBlock({
            block: SInfoBlockTitle,
            custom: index,
            children: title,
          })}
          {getAnimateBlock({
            block: SInfoBlockDescription,
            custom: index,
            children: descrition,
          })}
          {dividingLine &&
            getAnimateBlock({
              block: SInfoBlockDivider,
              custom: index,
            })}
        </SInfoBlock>
      ))}
    </SContainer>
  );
};

export { ContactsInfo };
