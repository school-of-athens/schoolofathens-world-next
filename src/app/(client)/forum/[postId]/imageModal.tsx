import { Button, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, Image } from "@chakra-ui/react"

export default function ImageModal() {
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent  h="80vh" maxW="unset" w="max-content">
          <ModalCloseButton bg="whiteAlpha.600" />

            <Image src={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1920px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg`} h="full" />
        </ModalContent>
      </Modal>
    </>
  )
};