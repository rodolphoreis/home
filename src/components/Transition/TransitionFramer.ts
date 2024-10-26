export const fadeIn = () => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.8,
        ease: [0.25],
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};
