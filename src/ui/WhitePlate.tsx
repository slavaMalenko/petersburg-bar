import React, { useRef } from 'react';
import styled, { StyledProps } from 'styled-components';
import {
  fontFamilySofiaSansSemiCondensed,
  pointer,
  selectNone,
  textTransformUppercase,
} from './commonStyles';
import { TCommonStyles } from './commonTypes';

type TWhitePlateStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const SWhitePlate = styled.div(
  ({ commonStyles }: TWhitePlateStyles) => `
    ${textTransformUppercase}
    ${selectNone}
    padding: 10px 0;
    text-align: center;
    background-color: #fff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    transition: all 0.2s linear;
    ${commonStyles ? commonStyles : ''}
    ${fontFamilySofiaSansSemiCondensed}
    ${pointer}
  `
);

interface IWhitePlate {
  title: string;
  commonStyles?: TCommonStyles;
  scrollToTitle?: boolean;
}
const WhitePlate: React.FC<IWhitePlate> = ({
  scrollToTitle = false,
  title,
  commonStyles,
}) => {
  const reff = useRef(null);
  return (
    <SWhitePlate
      commonStyles={commonStyles}
      onClick={() =>
        scrollToTitle &&
        window.scrollTo({
          top: reff.current.offsetTop - 30,
          behavior: 'smooth',
        })
      }
      ref={reff}
    >
      {title}
    </SWhitePlate>
  );
};

export { WhitePlate };
