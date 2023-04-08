import React, { ReactNode, ElementType } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { animation, commonStyles, textStyles } from '../../../../ui';

const { appearanceOnTheLeft } = animation;
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
  ${commonStyles.pointer}
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

type TAnimateBlock = (
  block: ReactNode,
  index: number,
  children?: ReactNode
) => ReactNode;
const animateBlock: TAnimateBlock = (block, index, children) => {
  const Block = block as ElementType;
  return (
    <Block custom={index} variants={appearanceOnTheLeft()}>
      {children && children}
    </Block>
  );
};

const ContactsInfo: React.FC = ({}) => {
  return (
    <SContainer
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      {info.map(({ title, descrition, dividingLine }: infoItem, index) => (
        <SInfoBlock key={`${descrition} ${index}`}>
          {animateBlock(SInfoBlockTitle, index, title)}
          {animateBlock(SInfoBlockDescription, index, descrition)}
          {dividingLine && animateBlock(SInfoBlockDivider, index)}
        </SInfoBlock>
      ))}
    </SContainer>
  );
};

export { ContactsInfo };
