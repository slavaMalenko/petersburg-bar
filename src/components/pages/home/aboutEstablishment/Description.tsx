import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import {
  Button,
  Title,
  WhitePlate,
  textStyles,
  flexStyles,
} from '../../../../ui';

const {
  displayFlex,
  justifySpaceBetween,
  alignItemsCenter,
  flexDirectionColumn,
} = flexStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textAlignCenter } =
  textStyles;

const SContainer = styled(motion.div)`
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
  font-weight: 900;
`;
const SButtonStyles = css`
  margin: 30px 0 0;
`;

interface IDescription {
  plateTitle: string;
  blockTitle: string;
  descriptionList: string[];
  onClick?: () => void;
}

const Description = forwardRef<HTMLDivElement, IDescription>(
  ({ plateTitle, blockTitle, descriptionList, onClick }, ref) => {
    return (
      <SContainer ref={ref}>
        <WhitePlate
          title={plateTitle}
          commonStyles={SWhitePlateStyles}
          scrollToTitle
        />
        <Title text={blockTitle} />

        {descriptionList.map((item, index) => (
          <SDescription key={`${item} ${index}`}>{item}</SDescription>
        ))}

        <Button
          marginBottom={10}
          text='Подробнее'
          commonStyles={SButtonStyles}
          onClick={onClick}
          center
          hoverRight
        />
      </SContainer>
    );
  }
);

export { Description };
export const MDescription = motion(Description);
