import { useRef, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import styled, { StyledProps } from 'styled-components';
import {
  commonStyles as additionalStyles,
  textStyles,
  flexStyles,
} from './commonStyles';
import { TCommonStyles } from './commonTypes';

const { displayFlex, justifyCenter } = flexStyles;
const { textTransformUppercase, fontFamilySofiaSansSemiCondensed } = textStyles;
const { selectNone, pointer } = additionalStyles;

const Container = styled.div`
  ${displayFlex}
  ${justifyCenter}
`;

type TWhitePlateStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const SWhitePlate = styled(motion.span)(
  ({ commonStyles }: TWhitePlateStyles) => `
    ${textTransformUppercase}
    ${selectNone}
    display: inline-block;
    padding: 10px 20px;
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
const WhitePlate = forwardRef<HTMLDivElement, IWhitePlate>(
  ({ scrollToTitle = false, title, commonStyles }, initRef) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(initRef, () => ref.current);
    return (
      <Container>
        <SWhitePlate
          ref={ref}
          commonStyles={commonStyles}
          onClick={() =>
            scrollToTitle &&
            window.scrollTo({
              top: ref.current.offsetTop - 30,
              behavior: 'smooth',
            })
          }
        >
          {title}
        </SWhitePlate>
      </Container>
    );
  }
);

export { WhitePlate };
export const MWhitePlate = motion(WhitePlate);
