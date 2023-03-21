import React from 'react';
import styled from 'styled-components';
import photo_preview from './img/photo_preview.png';
import {
  colorWhite,
  displayFlex,
  fontFamilySofiaSansSemiCondensed,
  justifySpaceBetween,
  textTransformUppercase,
} from '../../../../ui';
import { Concerts } from './Concerts/Concerts';

const SPreviewContent = styled.section`
  ${displayFlex}
  ${justifySpaceBetween}
`;
const SPreviewImg = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px rgb(45, 19, 13);
  margin-top: 40px;
  width: 65%;
  height: 500px;
  background: url(${photo_preview}) no-repeat 50%;
  background-size: 100%;
`;
const SPreviewShortInfo = styled.div`
  position: absolute;
  top: 300px;
  left: 60px;
  cursor: pointer;

  ${textTransformUppercase}
  padding: 10px 20px;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  opacity: 0.6;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
  ${fontFamilySofiaSansSemiCondensed}
`;
const SPreviewShortTag = styled.section`
  position: absolute;
  top: 360px;
  left: 60px;
  width: 400px;

  ${textTransformUppercase}
  font-size: 50px;
  font-weight: 700;
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
`;

export const Preview: React.FC = ({}) => {
  return (
    <SPreviewContent>
      <SPreviewImg>
        <SPreviewShortInfo>Since 1996</SPreviewShortInfo>
        <SPreviewShortTag>True. Fontanka. Underground.</SPreviewShortTag>
      </SPreviewImg>

      <Concerts />
    </SPreviewContent>
  );
};
