import React, { useState, ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import { MRetractableBlock } from './RetractableBlock';
import { animationVariants } from '../animation';

export type TRetractableBlock = {
  title: string;
  description: string | ReactNode;
};

interface IRetractableBlocks {
  descriptionBlocks: TRetractableBlock[];
  localStorageKey?: string;
}
export const RetractableBlocks: React.FC<IRetractableBlocks> = memo(
  ({ descriptionBlocks, localStorageKey }) => {
    const [openBlockIndex, setOpenBlockIndex] = useState<number>(
      (localStorageKey && +localStorage.getItem(localStorageKey)) || 0
    );
    const setOpenBlockIndexAndSave = (idx) => {
      setOpenBlockIndex(idx);
      localStorageKey && localStorage.setItem(localStorageKey, idx);
    };

    return (
      <motion.div initial='hidden' whileInView='visible'>
        {descriptionBlocks.map(({ title, description }, index) => (
          <MRetractableBlock
            custom={index}
            variants={animationVariants.appearanceOnTheLeft()}
            isOpenBlock={index === openBlockIndex}
            setOpenBlockIndex={setOpenBlockIndexAndSave}
            index={index}
            key={`${description} ${index}`}
            title={title}
            description={description}
          />
        ))}
      </motion.div>
    );
  }
);
