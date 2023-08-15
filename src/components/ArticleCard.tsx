import Post from "@/types/post";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FaComment,
  FaEye,
  FaRegComment,
  FaRegEye,
  FaSort,
} from "react-icons/fa6";

export default function ArticleCard({ article }: { article: Post }) {
  return (
    <Card
      variant="grayWithShadow"
      direction={{ base: "column", xl: "row" }}
      overflow="hidden"
    >
      {article.images && (
        <Image
          src={article.images[0]}
          w={{ base: "full", xl: "40%" }}
          objectFit="cover"
        />
      )}
      <CardBody pb={4} pt={4} w="full">
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Text mb={0} fontSize="sm" color="blue.400">
            ARTICLE
          </Text>
          <Button variant="ghostGray">
            <Avatar size="xs" mr={2} />
            Username
          </Button>
        </Flex>
        <Heading size="xs">{article.title}</Heading>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          pt={3}
          borderTop="2px solid"
          borderColor="gray.300"
          color="gray.600"
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
            <Icon as={FaSort} w={5} h={5} color="gray.500" me={2} />
            123
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
