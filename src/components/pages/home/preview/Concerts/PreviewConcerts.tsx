import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../../../../store';
import {
  alignItemsCenter,
  displayFlex,
  justifyCenter,
  textAlignCenter,
} from '../../../../../ui';

const SPreviewConcerts = styled.div`
  flex-wrap: wrap;
  ${displayFlex}
`;
const SPreview = styled.div`
  width: 50%;
  ${textAlignCenter}
  ${displayFlex}
  ${alignItemsCenter}
  ${justifyCenter}
`;

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const SPreviewImg = styled.img`
  cursor: pointer;
  width: 170px;
  height: 200px;
  transition: all 0.2s linear;
  border-radius: 15px;
  opacity: 0;
  animation: ${FadeInAnimation} 1s forwards;

  &:hover {
    transform: scale(1.03);
  }
`;

interface IPreviewConcerts {
  concertsType: string;
}
export const PreviewConcerts: React.FC<IPreviewConcerts> = memo(
  ({ concertsType }) => {
    const { concerts } = useAppSelector(({ concerts }) => ({
      concerts,
    }));
    return (
      <SPreviewConcerts>
        {concerts[concertsType].map(({ src }, index) => (
          <SPreview key={`${src}${index}`}>
            <SPreviewImg src={src} />
          </SPreview>
        ))}
      </SPreviewConcerts>
    );
  }
);
