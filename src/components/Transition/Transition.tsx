/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "./TransitionFramer";

export function Transition(props: TransitionProps) {
  const { children, className } = props;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
