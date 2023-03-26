import React, { useState, ReactNode, memo } from 'react';
import { RetractableBlock } from './RetractableBlock';

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
      <>
        {descriptionBlocks.map(({ title, description }, index) => (
          <RetractableBlock
            isOpenBlock={index === openBlockIndex}
            setOpenBlockIndex={setOpenBlockIndexAndSave}
            index={index}
            key={`${description} ${index}`}
            title={title}
            description={description}
          />
        ))}
      </>
    );
  }
);
