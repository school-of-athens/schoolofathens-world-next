import { Button } from "@chakra-ui/react";
import useAuthRequired from "../../../../hooks/useAuthRequired";

const NewOpinionButtton = ({ onOpen }) => {
  const authRequired = useAuthRequired();

  return (
    <Button
      variant="blue"
      onClick={() => {
        authRequired(onOpen);
      }}
    >
      Share Your Opinion
    </Button>
  );
};

export default NewOpinionButtton;
