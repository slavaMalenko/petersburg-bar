import React from 'react';
import { Dividing, commonStyles, flexStyles, textStyles } from '../../ui';
import styled from 'styled-components';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { fontFamilySofiaSansSemiCondensed, colorWhite } = textStyles;
const FooterInfo = styled.div`
  ${fontFamilySofiaSansSemiCondensed}
  ${colorWhite}
  ${displayFlex}
  ${justifySpaceBetween}
  ${commonStyles.selectNone}
  padding: 10px 0 20px;
`;
const Footer: React.FC = ({}) => (
  <footer>
    <Dividing />

    <FooterInfo>
      <span>Copyright © 2022. Все права защищены.</span>
      <span>Разработано d-e-n.ru</span>
    </FooterInfo>
  </footer>
);

export { Footer };
