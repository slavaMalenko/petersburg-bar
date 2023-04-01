import { useRef, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import styled, { StyledProps } from 'styled-components';
import { commonStyles as additionalStyles, textStyles } from './commonStyles';
import { TCommonStyles } from './commonTypes';

const { textTransformUppercase, fontFamilySofiaSansSemiCondensed } = textStyles;
const { selectNone, pointer } = additionalStyles;

type TWhitePlateStyles = StyledProps<{
  commonStyles?: TCommonStyles;
}>;
const SWhitePlate = styled(motion.div)(
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
const WhitePlate = forwardRef<HTMLDivElement, IWhitePlate>(
  ({ scrollToTitle = false, title, commonStyles }, initRef) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(initRef, () => ref.current);
    return (
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
    );
  }
);

export { WhitePlate };
export const MWhitePlate = motion(WhitePlate);
