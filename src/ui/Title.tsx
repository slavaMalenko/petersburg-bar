import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styled, { StyledProps } from 'styled-components';
import { commonStyles as additionalStyles, textStyles } from './commonStyles';
import { TCommonStyles } from './commonTypes';

const {
  colorWhite,
  textTransformUppercase,
  fontFamilySofiaSansSemiCondensed,
  textAlignCenter,
} = textStyles;

type TTitleStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const STitle = styled(motion.h1)(
  ({ commonStyles }: TTitleStyles) => `
    letter-spacing: 3px;
    font-size: 45px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${additionalStyles.selectNone}
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

const Title = forwardRef<HTMLDivElement, ITitle>(
  ({ text, commonStyles }, ref) => (
    <STitle ref={ref} commonStyles={commonStyles}>
      {text}
    </STitle>
  )
);

export { Title };
export const MTitle = motion(Title);
