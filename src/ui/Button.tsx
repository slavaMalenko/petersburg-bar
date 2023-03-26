import React from 'react';
import styled, { StyledProps } from 'styled-components';
import {
  colorWhite,
  textTransformUppercase,
  fontFamilySofiaSansSemiCondensed,
  textAlignCenter,
  selectNone,
  pointer,
  displayFlex,
  justifyCenter,
} from './commonStyles';
import { TCommonStyles } from './commonTypes';

const SContainer = styled.div`
  ${displayFlex}
  ${justifyCenter}
`;

const SButtonHover = styled.div`
  background: #ff6200;
  top: 0;
  left: -405px;
  width: 400px;
  height: 50px;
  position: absolute;
  transition: all 0.3s linear;
  z-index: 1;
`;

type TButtonStyles = StyledProps<{
  commonStyles?: TCommonStyles;
  verticalMargin?: number;
  marginBottom?: number;
  filling?: boolean;
  hoverRight?: boolean;
}>;
const SButton = styled.div(
  ({
    commonStyles,
    verticalMargin,
    marginBottom,
    filling,
    hoverRight,
  }: TButtonStyles) => `
    ${fontFamilySofiaSansSemiCondensed}
    ${selectNone}
    ${textTransformUppercase}
    ${colorWhite}
    ${pointer}
    ${textAlignCenter}
    position: relative;
    border: 2px solid #d5621d;
    border-radius: 5px;

    padding: 10px 30px;
    max-width: 150px;
    max-height: 50px;
    font-weight: 700;
    font-size: 20px;
    transition: all .2s linear;
    overflow: hidden;

    &:hover {
      background: ${filling ? '#ff6200' : 'rgb(213, 98, 29)'};
    }

    ${hoverRight ? `&:hover ${SButtonHover} { left: 0; }` : ''}
    ${filling && !hoverRight ? `background: rgb(213, 98, 29);` : ''}
    ${verticalMargin ? `margin: ${verticalMargin}px 0;` : ''}
    ${marginBottom ? `margin-bottom: ${marginBottom}px;` : ''}
    ${commonStyles ? commonStyles : ''}
  `
);
const SButtonText = styled.div`
  position: relative;
  z-index: 100;
`;

interface IButton {
  text: string;
  commonStyles?: TCommonStyles;
  center?: boolean;
  verticalMargin?: number;
  marginBottom?: number;
  filling?: boolean;
  hoverRight?: boolean;
  onClick?: any;
}

const Button: React.FC<IButton> = ({
  text,
  commonStyles,
  verticalMargin,
  marginBottom,
  onClick,
  filling = true,
  center = false,
  hoverRight = false,
}) =>
  center ? (
    <SContainer>
      <SButton
        commonStyles={commonStyles}
        onClick={() => onClick && onClick()}
        verticalMargin={verticalMargin}
        marginBottom={marginBottom}
        filling={filling}
        hoverRight={hoverRight}
      >
        <SButtonText>{text}</SButtonText>
        <SButtonHover />
      </SButton>
    </SContainer>
  ) : (
    <SButton
      verticalMargin={verticalMargin}
      marginBottom={marginBottom}
      filling={filling}
      hoverRight={hoverRight}
      commonStyles={commonStyles}
    >
      <SButtonText>{text}</SButtonText>
      <SButtonHover />
    </SButton>
  );

export { Button };
