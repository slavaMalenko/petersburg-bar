import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { flexStyles, textStyles, commonStyles } from '../../../../../ui';

const {
  displayFlex,
  justifySpaceBetween,
  alignItemsCenter,
  flexDirectionColumn,
} = flexStyles;
const { pointer, selectNone, hoverFrame } = commonStyles;
const { fontFamilySofiaSansSemiCondensed, colorWhite } = textStyles;

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
  padding: 15px;
  ${hoverFrame};
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

const MenuItem = forwardRef<HTMLDivElement, IMenuItem>(
  ({ data: { src, name, description, price, weight } }, ref) => {
    return (
      <MenuItemContainer ref={ref}>
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
  }
);

export { MenuItem };
export const MMenuItem = motion(MenuItem);
