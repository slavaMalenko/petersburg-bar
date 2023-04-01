import { memo } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../../../../store';
import { flexStyles, textStyles, commonStyles } from '../../../../../ui';

const { displayFlex, alignItemsCenter, justifyCenter } = flexStyles;

const SPreviewConcerts = styled.div`
  flex-wrap: wrap;
  overflow: hidden;
  ${displayFlex}
`;
const SPreview = styled.div`
  width: 50%;
  ${textStyles.textAlignCenter}
  ${displayFlex}
  ${alignItemsCenter}
  ${justifyCenter}
`;

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const SPreviewImg = styled(motion.img)`
  width: 170px;
  height: 200px;
  transition: all 0.2s linear;
  border-radius: 30px;
  opacity: 0;
  animation: ${FadeInAnimation} 1s forwards;
  ${commonStyles.pointer}
`;
let count = 0;
const getСoordinateValue: () => {
  getX: (index) => number;
} = () => {
  return {
    getX: (index) =>
      index % 2 === 0
        ? count % 3 === 0
          ? 300
          : -300
        : count % 2 === 0
        ? -300
        : 300,
  };
};

interface IPreviewConcerts {
  concertsType: string;
}
export const PreviewConcerts: React.FC<IPreviewConcerts> = memo(
  ({ concertsType }) => {
    count = count + 1;
    const { concerts } = useAppSelector(({ concerts }) => ({
      concerts,
    }));
    return (
      <SPreviewConcerts>
        {concerts[concertsType].map(({ src }, index) => (
          <SPreview key={`${src}${index}`}>
            <SPreviewImg
              initial={{
                x: getСoordinateValue().getX(index),
              }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.03 }}
              src={src}
            />
          </SPreview>
        ))}
      </SPreviewConcerts>
    );
  }
);
