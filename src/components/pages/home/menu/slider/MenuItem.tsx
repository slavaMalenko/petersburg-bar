import React from 'react';
import styled from 'styled-components';
import {
  displayFlex,
  justifySpaceBetween,
  alignItemsCenter,
  fontFamilySofiaSansSemiCondensed,
  flexDirectionColumn,
  colorWhite,
  pointer,
  selectNone,
} from '../../../../../ui';

export const SPrice = styled.div`
  font-weight: 700;
  font-size: 17px;
  text-transform: uppercase;
  padding: 8px 20px;
  border: 3px #d5621d solid;
  border-radius: 5px;
  transition: all 0.2s linear;
  ${pointer}
`;
export const MenuItemContainer = styled.div`
  width: 485px;
  height: 140px;
  margin-bottom: 15px;
  margin-right: 20px;
  position: relative;
  box-sizing: border-box;
  padding: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: 0.3s ease-in-out;
    width: 0;
    height: 0;
  }
  &::before {
    top: -5px;
    left: -5px;
    border-top: 0px solid #d5621d;
    border-left: 0px solid #d5621d;
  }

  &::after {
    right: -5px;
    bottom: -5px;
    border-bottom: 0px solid #d5621d;
    border-right: 0px solid #d5621d;
  }
  &:hover::before {
    border-top: 1px solid #d5621d;
    border-left: 1px solid #d5621d;
  }
  &:hover::after {
    border-bottom: 1px solid #d5621d;
    border-right: 1px solid #d5621d;
  }
  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
  &:hover ${SPrice} {
    background: #d5621d;
  }
  ${selectNone}
  ${pointer}
  ${colorWhite}
  ${fontFamilySofiaSansSemiCondensed}
  ${displayFlex};
  ${justifySpaceBetween};
`;
export const SImg = styled.img`
  width: 23%;
  height: 110px;
`;
export const SContent = styled.div`
  width: 77%;
  padding: 10px 0 0 20px;
  ${displayFlex};
  ${justifySpaceBetween};
  ${flexDirectionColumn};
`;
export const SInfoBlock = styled.div`
  ${displayFlex};
  ${justifySpaceBetween};
  ${alignItemsCenter};
`;
export const SDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const STitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
`;
export const SWeight = styled.div`
  color: #d5621d;
`;

interface IMenuItem {
  data: any;
}

const MenuItem: React.FC<IMenuItem> = ({
  data: { src, name, description, price, weight },
}) => {
  return (
    <MenuItemContainer>
      <SImg src={src} />

      <SContent>
        <SInfoBlock>
          <STitle>{name}</STitle>
          <SPrice>{price} ₽</SPrice>
        </SInfoBlock>

        <SWeight>{weight} гр</SWeight>

        <SDescription>{description}</SDescription>
      </SContent>
    </MenuItemContainer>
  );
};

export { MenuItem };
