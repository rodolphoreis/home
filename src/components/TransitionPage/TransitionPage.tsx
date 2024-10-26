import { AnimatePresence, motion } from "framer-motion";

const transitionVariantsPage = {
  hidden: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: "100%",
    width: "100%",
  },
};

export function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary"
          variants={transitionVariantsPage}
          initial="hidden"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-secondary/70 opacity-50"
          variants={transitionVariantsPage}
          initial="hidden"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  );
}
