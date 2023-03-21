import React from 'react';
import styled, {
  StyledProps,
  FlattenSimpleInterpolation,
} from 'styled-components';
import {
  fontFamilySofiaSansSemiCondensed,
  textTransformUppercase,
} from './commonStyles';

type TCommonStyles = string | FlattenSimpleInterpolation;
type TWhitePlateStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const SWhitePlate = styled.div(
  ({ commonStyles }: TWhitePlateStyles) => `
  cursor: pointer;
  ${textTransformUppercase}
  padding: 10px 0;
  text-align: center;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  transition: all 0.2s linear;
  ${commonStyles ? commonStyles : ''}
  ${fontFamilySofiaSansSemiCondensed}
`
);

interface IWhitePlate {
  title: string;
  commonStyles?: TCommonStyles;
}
const WhitePlate: React.FC<IWhitePlate> = ({ title, commonStyles }) => (
  <SWhitePlate commonStyles={commonStyles}>{title}</SWhitePlate>
);

export { WhitePlate };
