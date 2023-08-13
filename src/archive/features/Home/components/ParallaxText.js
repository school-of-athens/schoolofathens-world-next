import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Text } from "@chakra-ui/react";


export default function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box
      overflow="hidden"
      letterSpacing="-2px"
      lineHeight="0.8"
      margin="0"
      whiteSpace="nowrap"
      display="flex"
      flexWrap="nowrap"
    >
      <Box
        as={motion.div}
        fontWeight={600}
        textTransform="uppercase"
        fontSize="64px"
        whiteSpace="nowrap"
        display="flex"
        flexWrap="nowrap"
        style={{ x }}
      >
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>
        <Text as="span" me={6}>{children}</Text>


      </Box>
    </Box>
  );
}

// export default function App() {
//   return (
//     <>
//       <ParallaxText baseVelocity={-5}>
//         <FontAwesomeIcon icon={faPlay} />Vote On</ParallaxText>
//       <ParallaxText baseVelocity={5}>Blockchain</ParallaxText>

//     </>
//   );
// }
