import React from 'react';
import styled, { css } from 'styled-components';
import Vector from './img/Vector.png';
import { useAppSelector } from '../../../../../store';
import { MenuItem } from './MenuItem';
import {
  displayFlex,
  justifyCenter,
  justifySpaceBetween,
  alignItemsCenter,
  flexWrap,
  pointer,
} from '../../../../../ui';

const SliderContainer = styled.div`
  margin-bottom: 400px;
  ${displayFlex}
  ${justifySpaceBetween}
  ${alignItemsCenter}
`;

const Button = css`
  width: 50px;
  height: 50px;
  background: #d5621d;
  border-radius: 5px;
  transition: all 0.2s linear;
  ${pointer}
  ${displayFlex}
  ${justifyCenter}
  ${alignItemsCenter}

  &:hover {
    background: #d55200;
  }
`;
const SButtonLeft = styled.div`
  ${Button}
`;
const SButtonRight = styled.div`
  ${Button}
  transform: rotate(180deg);
`;

const SImg = styled.img`
  width: 10px;
  height: 17px;
`;

const SContent = styled.div`
  max-width: 1000px;
  min-height: 50px;
  ${displayFlex}
  ${flexWrap}
  ${justifySpaceBetween}
`;

interface ISlider {}

const Slider: React.FC<ISlider> = ({}) => {
  const { menuItems } = useAppSelector(({ menu: { menu: menuItems } }) => ({
    menuItems,
  }));

  return (
    <SliderContainer>
      <SButtonLeft>
        <SImg src={Vector} />
      </SButtonLeft>

      <SContent>
        {menuItems.map((data) => (
          <MenuItem data={data} />
        ))}
      </SContent>

      <SButtonRight>
        <SImg src={Vector} />
      </SButtonRight>
    </SliderContainer>
  );
};

export { Slider };
