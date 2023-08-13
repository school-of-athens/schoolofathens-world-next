import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const breakpointColumnsObj = {
  default: 2,
  576: 1,
};

export default function Opinions({ userData }) {
  return (
    <Box className="profile-body--section">
      <Heading size="lg" mb={4} ml={1}>Opinions</Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <Card variant="borderBottom">
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <span>Date</span>
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-gray"
              />
              0 Upvotes
            </span>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <span>Date</span>
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-gray"
              />
              0 Upvotes
            </span>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <span>Date</span>
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-gray"
              />
              0 Upvotes
            </span>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <span>Date</span>
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-gray"
              />
              0 Upvotes
            </span>
          </CardFooter>
        </Card>
      </Masonry>
    </Box>
  );
}
