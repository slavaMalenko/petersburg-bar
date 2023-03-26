import React from 'react';
import styled, { css } from 'styled-components';
import { Description } from './Description';
import { displayFlex, justifySpaceBetween } from '../../../../ui';
import Rectangle from './img/Rectangle.png';

const descriptionList = [
  'Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.',
  'Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.',
  'Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.',
];

const SContainer = styled.section`
  ${displayFlex}
  ${justifySpaceBetween}
  margin: 40px 0px 65px;
`;
const SImg = styled.img`
  width: 33.3%;
`;

export const AboutEstablishments: React.FC = ({}) => {
  return (
    <SContainer>
      <Description
        plateTitle='Top “Manhattan” events'
        blockTitle='Банкеты'
        descriptionList={descriptionList}
      />
      <SImg src={Rectangle} />
      <Description
        plateTitle='Top “Manhattan” tourists'
        blockTitle='Туристы'
        descriptionList={descriptionList}
      />
    </SContainer>
  );
};
