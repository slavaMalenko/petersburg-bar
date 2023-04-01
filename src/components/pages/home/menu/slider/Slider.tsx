import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import styled, {
  css,
  StyledProps,
  FlattenSimpleInterpolation,
} from 'styled-components';
import Vector from './img/Vector.png';
import { useAppSelector } from '../../../../../store';
import { MMenuItem } from './MenuItem';
import { flexStyles, animation, commonStyles } from '../../../../../ui';

const {
  displayFlex,
  justifyCenter,
  justifySpaceBetween,
  alignItemsCenter,
  flexWrap,
  flexDirectionColumn,
} = flexStyles;
const { pointer, selectNone, cursorDefault } = commonStyles;

const SliderContainer = styled(motion.div)`
  margin-bottom: 20px;
  ${displayFlex}
  ${justifySpaceBetween}
  ${alignItemsCenter}
`;

const Button = css`
  width: 50px;
  height: 50px;
  background: #d5621d;
  border-radius: 5px;
  z-index: 100;
  transition: all 0.2s linear;
  ${selectNone}
  ${displayFlex}
  ${justifyCenter}
  ${alignItemsCenter}
`;
type TTitleStyles = StyledProps<{
  isActive?: boolean | FlattenSimpleInterpolation;
}>;
const SButtonRight = styled.div<TTitleStyles>`
  ${Button}
  ${({ isActive }) => (isActive ? pointer : cursorDefault)};
  transform: rotate(180deg);
  background: ${({ isActive }) => (isActive ? '#d5621d' : '#8a6854')};
  &:hover {
    background: ${({ isActive }) => (isActive ? '#ff6200' : '#8a6854')};
  }
`;
const SButtonLeft = styled.div<TTitleStyles>`
  ${Button}
  ${({ isActive }) => (isActive ? pointer : cursorDefault)};
  background: ${({ isActive }) => (isActive ? '#d5621d' : '#8a6854')};
  &:hover {
    background: ${({ isActive }) => (isActive ? '#ff6200' : '#8a6854')};
  }
`;

const SImg = styled.img`
  width: 10px;
  height: 17px;
`;

const SContent = styled.div`
  width: 1015px;
  height: 635px;
  position: relative;
  overflow: hidden;
`;

const SContentAbsolute = styled.div<{ left: number }>`
  position: absolute;
  height: 620px;
  top: 5px;
  left: ${({ left }) => left}px;
  transition: all 0.3s linear;
  ${displayFlex}
  ${flexWrap}
  ${flexDirectionColumn}
`;

interface ISlider {}

const Slider = forwardRef<HTMLDivElement, ISlider>(({}, ref) => {
  const [left, setLeft] = useState(
    localStorage.getItem('left') ? +localStorage.getItem('left') : 5
  );
  const [totalElements, setTotalElements] = useState(
    localStorage.getItem('totalElements')
      ? +localStorage.getItem('totalElements')
      : 8
  );
  const { menuItems } = useAppSelector(({ menu: { menu: menuItems } }) => ({
    menuItems,
  }));

  return (
    <SliderContainer
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1 }}
    >
      <SButtonLeft
        isActive={totalElements > 8}
        onClick={() => {
          const newLeft = left < 0 ? left + 500 : 5;
          setLeft(newLeft);
          localStorage.setItem('left', `${newLeft}`);

          const newTotalElements =
            totalElements > 8 ? totalElements - 4 : totalElements;
          setTotalElements(newTotalElements);
          localStorage.setItem('totalElements', `${newTotalElements}`);
        }}
      >
        <SImg src={Vector} />
      </SButtonLeft>

      <SContent>
        <SContentAbsolute left={left}>
          {menuItems.map((data, index) => (
            <MMenuItem
              custom={index}
              variants={animation.appearanceOnTheTop()}
              key={`${data} ${index}`}
              data={data}
            />
          ))}
        </SContentAbsolute>
      </SContent>

      <SButtonRight
        isActive={totalElements <= menuItems.length}
        onClick={() => {
          if (menuItems.length > totalElements) {
            const newLeft = left - 500;
            setLeft(newLeft);
            localStorage.setItem('left', `${newLeft}`);

            const newTotalElements = totalElements + 4;
            setTotalElements(newTotalElements);
            localStorage.setItem('totalElements', `${newTotalElements}`);
          }
        }}
      >
        <SImg src={Vector} />
      </SButtonRight>
    </SliderContainer>
  );
});

export { Slider };
export const MSlider = motion(Slider);
