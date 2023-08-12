import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "semibold",
    borderTopRadius: 5,
    marginEnd: 1,

    _hover: {
      bgColor: "whiteAlpha.800",
    },

    _selected: {
      bgColor: "whiteAlpha.900",
      textColor: "gray.700",
    },
  },
  tablist: {
    
  },
});

// export the component theme
const tabsTheme = defineMultiStyleConfig({ baseStyle });
export default tabsTheme;
