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
  padding: 10px 20px;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  opacity: 0.6;
  transition: all 0.2s linear;
  ${commonStyles ? commonStyles : ''}

  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
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
