import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TRetractableBlock } from './RetractableBlocks';
import Vector from './img/Vector.png';
import {
  alignItemsCenter,
  colorWhite,
  displayFlex,
  fontFamilySofiaSansSemiCondensed,
  justifySpaceBetween,
  pointer,
  selectNone,
  textTransformUppercase,
} from '../commonStyles';

const SContainer = styled.div<{ height: number; isOpenBlock: boolean }>`
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
  ${selectNone}
  ${({ height, isOpenBlock }) =>
    !isOpenBlock ? `height: 58px;` : `height: ${height}px;`}
  min-height: 63px;
  width: 100%;
  ${({ isOpenBlock }) =>
    isOpenBlock
      ? `background: rgba(213, 98, 29, 1);`
      : `background: rgba(213, 98, 29, 0.1);`}
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: all 0.25s linear;
`;
const STitleBlock = styled.div`
  ${displayFlex}
  ${alignItemsCenter}
  ${justifySpaceBetween}
  ${pointer}
`;
const STitle = styled.div`
  ${textTransformUppercase}
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 19px;
  padding: 22px 0 22px 40px;
`;
const SArrow = styled.img<{ isOpenBlock: boolean }>`
  transform: ${({ isOpenBlock }) =>
    isOpenBlock ? 'rotate(270deg);' : 'rotate(90deg);'}
  padding: 0 40px;
  width: 12px;
  height: 21px;
  transition: all 0.25s linear;
`;
const SDescription = styled.div`
  padding: 15px 0 15px 40px;
`;

interface IRetractableBlock extends TRetractableBlock {
  isOpenBlock: boolean;
  setOpenBlockIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}
const RetractableBlock = forwardRef<HTMLDivElement, IRetractableBlock>(
  ({ title, description, isOpenBlock, setOpenBlockIndex, index }, initRef) => {
    const ref = useRef<HTMLDivElement>();
    useImperativeHandle(initRef, () => ref.current);
    const [contentHeight, setContentHeight] = useState(0);
    const [height, setHeight] = useState<number | undefined>();
    const onToggleHeight = useCallback(() => {
      setHeight(contentHeight);
    }, [contentHeight]);

    useEffect(() => {
      if (ref.current) setContentHeight(ref?.current?.scrollHeight);
    }, []);

    return (
      <SContainer ref={ref} height={height} isOpenBlock={isOpenBlock}>
        <STitleBlock
          onClick={() => {
            setOpenBlockIndex(index);
            onToggleHeight();
          }}
        >
          <STitle>{title}</STitle>
          <SArrow src={Vector} isOpenBlock={isOpenBlock} />
        </STitleBlock>
        <SDescription>{description}</SDescription>
      </SContainer>
    );
  }
);
export { RetractableBlock };
export const MRetractableBlock = motion(RetractableBlock);
