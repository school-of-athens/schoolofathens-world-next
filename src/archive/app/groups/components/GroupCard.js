import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  CardFooter,
  GridItem,
  Image,
  AvatarGroup,
  Avatar,
  Link,
} from "@chakra-ui/react";
import sampleGroup from "@/data/sampleGroup";
import NextLink from "next/link";

function GroupCard() {
  return (
    <GridItem colSpan={4}>
      <Link
        as={NextLink}
        href={`/groups/sample`}
        _hover={{ textDecoration: "none" }}
      >
        <Card px={4} py={6}>
          <CardHeader>
            <Image src={sampleGroup.photoURL} />
            <Heading>{sampleGroup.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{sampleGroup.description}</Text>
          </CardBody>
          <CardFooter>
            <Text>Members: {sampleGroup.members.length}</Text>
            <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </CardFooter>
        </Card>
      </Link>
    </GridItem>
  );
}

export default GroupCard;
