import React from 'react';
import styled, { StyledProps } from 'styled-components';
import {
  colorWhite,
  textTransformUppercase,
  fontFamilySofiaSansSemiCondensed,
  textAlignCenter,
} from './commonStyles';
import { TCommonStyles } from './commonTypes';

type TTitleStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const STitle = styled.div(
  ({ commonStyles }: TTitleStyles) => `
    font-size: 40px;
    font-weight: 900;
    margin-top: 40px;
    ${textAlignCenter}
    ${fontFamilySofiaSansSemiCondensed}
    ${textTransformUppercase}
    ${colorWhite}
    ${commonStyles ? commonStyles : ''}
  `
);

interface ITitle {
  text: string;
}

const Title: React.FC<ITitle> = ({ text }) => <STitle>{text}</STitle>;

export { Title };
