export const appearanceOnTheLeft: (visibleOpacity?: number) => any = (
  visibleOpacity = 1
) => ({
  hidden: (custom) => ({
    x: -100,
    opacity: 0,
    transition: { delay: custom * 0.3 },
  }),
  visible: (custom) => ({
    x: 0,
    opacity: visibleOpacity,
    transition: { delay: custom * 0.3 },
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
  visible: (custom) => ({
    y: 0,
    opacity: visibleOpacity,
    transition: { delay: custom * transition },
  }),
});
