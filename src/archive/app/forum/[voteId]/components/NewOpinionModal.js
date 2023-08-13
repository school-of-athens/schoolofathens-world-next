import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import useNewOpinion from "../hooks/useNewOpinion";
import useSubmitNewOpinion from "../hooks/useSubmitOpinion";
import getSortedObjectKeys from "../../../../utils/getSortedObjectKeys";

export default function ({ voteData, voteId, isOpen, onClose }) {
  const [newOpinion, setNewOpinion, option, setOption] = useNewOpinion(voteId);
  const options = getSortedObjectKeys(voteData.options);

  const submitOpinion = useSubmitNewOpinion(voteId, option, newOpinion);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share Your Opinion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Which side do you support?</FormLabel>
              <Select
                variant="primary"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="default">Select a side</option>
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title (Optional)</FormLabel>
              <Input
                variant="primary"
                placeholder="Give a title for your opinion"
                value={newOpinion.title}
                onChange={(e) =>
                  setNewOpinion((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Share your opinion with us</FormLabel>
              <Textarea
                variant="primary"
                rows={5}
                value={newOpinion.text}
                onChange={(e) =>
                  setNewOpinion((prev) => {
                    return { ...prev, text: e.target.value };
                  })
                }
              ></Textarea>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Discard
            </Button>
            <Button variant="blue" onClick={submitOpinion}>
              Publsh Opinion
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
