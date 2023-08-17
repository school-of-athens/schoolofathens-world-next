import Post from "@/types/post";
import {
  Avatar,
  Button,
  Card,
  Image,
  Text,
  Flex,
  Icon,
  IconButton,
  HStack,
  Circle,
} from "@chakra-ui/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaComment,
  FaEye,
  FaRegComment,
  FaRegEye,
  FaRegSquareCaretDown,
  FaRegSquareCaretUp,
  FaSquareCaretDown,
  FaSquareCaretUp,
} from "react-icons/fa6";
import { useState } from "react";

export default function DiscussionCard({ discussion }: { discussion: Post }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Card variant="grayWithShadow" overflow="hidden" px={6} py={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text mb={0} fontSize="sm" color="blue.400">
          DISCUSSION
        </Text>
        <Button variant="ghostGray">
          <Avatar size="xs" mr={2} />
          Username
        </Button>
      </Flex>
      <Text fontWeight="900" fontSize="xl" mb={2}>
        {discussion.title}
      </Text>
      <Text fontSize="lg">{discussion.body}</Text>
      {discussion.images && (
        <Flex w="full" position="relative" mt={4} mb={2}>
          <IconButton
            variant="light"
            display={currentSlide === 0 ? "none" : "inline-flex"}
            icon={<FaChevronLeft />}
            aria-label="previous slide"
            position="absolute"
            borderRadius="full"
            left="3"
            top="45%"
            onClick={() => {
              if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
              }
            }}
          />
          <IconButton
            variant="light"
            display={
              currentSlide === discussion.images.length - 1
                ? "none"
                : "inline-flex"
            }
            icon={<FaChevronRight />}
            aria-label="next slide"
            position="absolute"
            borderRadius="full"
            right="3"
            top="45%"
            onClick={() => {
              if (discussion.images && currentSlide < discussion.images.length) {
                setCurrentSlide(currentSlide + 1);
              }
            }}
          />
          <HStack
            position="absolute"
            width="full"
            justify="center"
            bottom="0"
            py="4"
          >
            {discussion.images.map((_, index) => (
              <Circle
                key={index}
                size="2"
                bg={currentSlide === index ? "white" : "whiteAlpha.600"}
              />
            ))}
          </HStack>
          <Image
            borderRadius="lg"
            border="2px solid"
            borderColor="gray.300"
            src={discussion.images[currentSlide]}
            objectFit="cover"
            alt="image"
          />
        </Flex>
      )}

      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
        pt={2}
        color="gray.600"
        borderTop="2px solid"
        borderColor="gray.300"
      >
        <Flex alignItems="center">
          <Icon as={FaRegEye} w={5} h={5} color="gray.500" me={2} />
          123
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaRegComment} w={5} h={5} color="gray.500" me={2} />
          123
        </Flex>
        <Flex alignItems="center">
          <Icon
            as={FaSquareCaretUp}
            w={5}
            h={5}
            color="gray.500"
            me={2}
            _hover={{ color: "blue.400" }}
          />
          <Icon
            as={FaSquareCaretDown}
            w={5}
            h={5}
            color="gray.500"
            me={2}
            _hover={{ color: "blue.400" }}
          />
          123
        </Flex>
      </Flex>
    </Card>
  );
}
