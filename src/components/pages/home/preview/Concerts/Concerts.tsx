import styled, { StyledProps } from 'styled-components';
import {
  colorWhite,
  displayFlex,
  flexDirectionColumn,
  fontFamilySofiaSansSemiCondensed,
  textAlignCenter,
  textTransformUppercase,
} from '../../../../../ui';
import { useState } from 'react';
import { PreviewConcerts } from './PreviewConcerts';

const SConcertsContainer = styled.div`
  width: 32%;
  box-shadow: 0px 0px 10px rgb(45, 19, 13);
  margin-top: 40px;
  ${displayFlex}
  ${flexDirectionColumn}
`;
const SConcertsBlock = styled.div`
  background: rgba(213, 98, 29, 0.1);
  border-radius: 0 0 5px 5px;
  height: 100%;
  padding: 10px;
  ${displayFlex}
`;
const SConcertsNavigate = styled.div`
  ${displayFlex}
`;

type TConcertsNavigateItemProps = StyledProps<{
  isActive: boolean;
}>;
const SConcertsNavigateItem = styled.div(
  ({ isActive }: TConcertsNavigateItemProps) => `
    ${textTransformUppercase}
    font-weight: 700;
    width: 50%;
    cursor: pointer;
    padding: 15px 0;
    background: #2d130d;
    border-radius: 5px 5px 0px 0px;
    transition: all .2s linear;
    ${isActive ? `background: rgba(213, 98, 29, 0.1);` : ''}
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
    ${textAlignCenter}
  `
);

const concertNavigate: { key: string; label: string }[] = [
  { key: 'prevConcerts', label: 'Ближайшие' },
  { key: 'soonConcerts', label: 'Скоро' },
];

export const Concerts: React.FC = ({}) => {
  const [activeNavigateItem, setActiveNavigateItem] = useState(
    localStorage.getItem('concertsType') || 'prevConcerts'
  );
  return (
    <SConcertsContainer>
      <SConcertsNavigate>
        {concertNavigate.map(({ key, label }) => (
          <SConcertsNavigateItem
            key={`${key}${label}`}
            isActive={key === activeNavigateItem}
            onClick={() => {
              localStorage.setItem('concertsType', key);
              setActiveNavigateItem(key);
            }}
          >
            {label}
          </SConcertsNavigateItem>
        ))}
      </SConcertsNavigate>

      <SConcertsBlock>
        <PreviewConcerts concertsType={activeNavigateItem} />
      </SConcertsBlock>
    </SConcertsContainer>
  );
};
