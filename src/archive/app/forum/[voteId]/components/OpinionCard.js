import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
import { Avatar, Button, Heading, Text } from "@chakra-ui/react";
import useUserInfo from "@/hooks/useUserInfo";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import timestampToDate from "@/utils/timestampToDate";

export default function ({ opinion }) {
  // TODO: each opinion card should be a separate column Box for better responsiveness

  const router = useRouter();
  const userInfo = useUserInfo(opinion.userId);

  return (
    <Card variant="plain" mb={6}>
      <CardHeader>
        <Button
          variant="ghostGray"
          onClick={() => router.push(`/user/${opinion.userId}`)}
        >
          <Avatar
            size="xs"
            mr={2}
            name={userInfo.displayName}
            src={userInfo.photoURL}
          />
          {userInfo.displayName}
        </Button>
      </CardHeader>
      <CardBody>
        {opinion.title && (
          <Heading size="md" mb={2}>
            {opinion.title}
          </Heading>
        )}
        <Text mb={0}>{opinion.text}</Text>
      </CardBody>
      <CardFooter>
        <span>Published {timestampToDate(opinion.publishDate)}</span>
        <Button
          variant="ghostGray"
          onClick={(e) => e.target.children[0].classList.toggle("blue")}
          isDisabled
        >
          <FontAwesomeIcon icon={faCircleUp} className="icon-gray" />
          {opinion.upvotes} upvotes
        </Button>
      </CardFooter>
    </Card>
  );
}
