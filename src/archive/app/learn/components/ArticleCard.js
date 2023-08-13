import {
  Card,
  CardBody,
  Button,
  Avatar,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ArticleExpand from "./ArticleExpand";
import ArticlePreview from "./ArticlePreview";
import useUserInfo from "@/hooks/useUserInfo";
import timestampToDate from "@/utils/timestampToDate";
import { useRouter } from "next/navigation";

function ArticleCard({ article, mode }) {
  const [expanded, setExpanded] = useState(false);
  const userInfo = useUserInfo(article.userId);
  const router = useRouter();

  return (
    <Card variant="plain" mb={6}>
      <CardHeader>
        {mode === "preview" ? (
          <Button variant="ghostGray">
            <Avatar size="xs" mr={2} src={userInfo?.photoURL} />
            {userInfo?.displayName}
          </Button>
        ) : (
          <Button
            variant="ghostGray"
            onClick={() => router.push(`/user/${article.userId}`)}
          >
            <Avatar size="xs" mr={2} src={userInfo?.photoURL} />
            {userInfo?.displayName}
          </Button>
        )}
      </CardHeader>
      <CardBody>
        {expanded ? (
          <ArticleExpand article={article} setExpanded={setExpanded} />
        ) : (
          <ArticlePreview article={article} setExpanded={setExpanded} />
        )}
      </CardBody>

      <CardFooter>
        <span>
          Published{" "}
          {typeof article.date === "string"
            ? article.date
            : timestampToDate(article.date)}
        </span>
        <Button
          variant="ghostGray"
          onClick={(e) => e.target.children[0].classList.toggle("blue")}
          isDisabled
        >
          <FontAwesomeIcon icon={faCircleUp} className="icon-gray" />0 upvotes
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
