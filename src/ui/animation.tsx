import { Variants, CustomDomComponent } from 'framer-motion';
import { ReactNode, ElementType } from 'react';

export namespace animationBlock {
  export type TAnimateBlock = {
    block: ReactNode | CustomDomComponent<React.RefAttributes<HTMLDivElement>>;
    custom: number;
    animation: Variants;
    props?: Object;
    children?: ReactNode;
  };
  export const getAnimateBlock: (arg: TAnimateBlock) => ReactNode = ({
    block,
    custom,
    children,
    animation,
    props = {},
  }) => {
    const Block = block as ElementType;
    return (
      <Block custom={custom} variants={animation} {...props}>
        {children && children}
      </Block>
    );
  };
}

export namespace animationVariants {
  export const appearanceOnTheLeft: (
    visibleOpacity?: number,
    transition?: number,
    duration?: number
  ) => any = (visibleOpacity = 1, transition = 0.1, duration = 0.5) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: visibleOpacity,
      transition: { type: 'tween', delay: custom * transition, duration },
    }),
  });

  export const appearanceOnTheRight: (
    visibleOpacity?: number,
    transition?: number,
    duration?: number
  ) => any = (visibleOpacity = 1, transition = 0.1, duration = 0.5) => ({
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: visibleOpacity,
      transition: { type: 'tween', delay: custom * transition, duration },
    }),
  });

  export const appearanceOnTheTop: (
    visibleOpacity?: number,
    transition?: number
  ) => any = (visibleOpacity = 1, transition = 0.1) => ({
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: visibleOpacity,
      transition: { delay: custom * transition },
    }),
  });
}
