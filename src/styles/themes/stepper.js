const baseStyle = {
  step: {
    // bg: "gray.100",
    borderRadius: "1rem",
    padding: {base: 2, md: 4},
    width: "100%",
    boxSizing: "content-box",
    _hover: {
        bg: "gray.200"
    }
  },
  description: {
    mb: 0
  }
};

const stepperTheme = {
  baseStyle,
};

export default stepperTheme;
