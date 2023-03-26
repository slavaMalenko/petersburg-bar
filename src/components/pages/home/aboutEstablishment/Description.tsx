import React from 'react';
import styled, { css } from 'styled-components';
import {
  Button,
  Title,
  WhitePlate,
  alignItemsCenter,
  colorWhite,
  displayFlex,
  flexDirectionColumn,
  fontFamilySofiaSansSemiCondensed,
  justifySpaceBetween,
  textAlignCenter,
} from '../../../../ui';

const SContainer = styled.div`
  ${displayFlex}
  ${flexDirectionColumn}
  ${alignItemsCenter}
  ${justifySpaceBetween}
  width: 30%;
`;
const SDescription = styled.div`
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
  ${textAlignCenter}
  width: 370px;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 10px;
`;
const SWhitePlateStyles = css`
  padding: 10px 35px;
  font-size: 16px;
  max-width: 240px;
  font-weight: 900;
`;
const STitleStyles = css`
  letter-spacing: 3px;
  font-size: 45px;
`;
const SButtonStyles = css`
  margin: 30px 0 0;
`;

interface IDescription {
  plateTitle: string;
  blockTitle: string;
  descriptionList: string[];
}

export const Description: React.FC<IDescription> = ({
  plateTitle,
  blockTitle,
  descriptionList,
}) => {
  return (
    <SContainer>
      <WhitePlate
        title={plateTitle}
        commonStyles={SWhitePlateStyles}
        scrollToTitle
      />
      <Title text={blockTitle} commonStyles={STitleStyles} />

      {descriptionList.map((item, index) => (
        <SDescription key={`${item} ${index}`}>{item}</SDescription>
      ))}

      <Button
        marginBottom={10}
        text='Подробнее'
        commonStyles={SButtonStyles}
        center
        hoverRight
      />
    </SContainer>
  );
};
