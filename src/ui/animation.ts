export const appearanceOnTheLeft: (
  visibleOpacity?: number,
  transition?: number,
  duration?: number
) => any = (visibleOpacity = 1, transition = 0.1, duration = 0.5) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
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
  visible: (custom) => ({
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
  visible: (custom) => ({
    y: 0,
    opacity: visibleOpacity,
    transition: { delay: custom * transition },
  }),
});
