import React from 'react';
import styled, { StyledProps } from 'styled-components';
import {
  colorWhite,
  textTransformUppercase,
  fontFamilySofiaSansSemiCondensed,
  textAlignCenter,
  selectNone,
} from './commonStyles';
import { TCommonStyles } from './commonTypes';

type TTitleStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const STitle = styled.div(
  ({ commonStyles }: TTitleStyles) => `
    font-size: 40px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${selectNone}
    ${textAlignCenter}
    ${fontFamilySofiaSansSemiCondensed}
    ${textTransformUppercase}
    ${colorWhite}
    ${commonStyles ? commonStyles : ''}
  `
);

interface ITitle {
  text: string;
  commonStyles?: TCommonStyles;
}

const Title: React.FC<ITitle> = ({ text, commonStyles }) => (
  <STitle commonStyles={commonStyles}>{text}</STitle>
);

export { Title };
