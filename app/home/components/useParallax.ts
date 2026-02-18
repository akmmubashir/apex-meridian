import { useTransform, useViewportScroll } from "framer-motion";

export const useParallax = (offset: number = 50) => {
  const { scrollY } = useViewportScroll();
  return useTransform(scrollY, (latest) => latest * 0.5 - offset);
};
