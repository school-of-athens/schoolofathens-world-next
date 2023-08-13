import { acropolisAtAthens } from "@/data/projectFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Flex,
  Avatar,
  Text,
  Button,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 2,
  992: 1,
};

export default function Insights({ userData }) {
  return (
    <Box className="profile-body--section">
      <Heading size="lg" ml={1} mb={4}>
        Insights
      </Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <Card variant="borderBottom">
          <Image
            objectFit="cover"
            src={acropolisAtAthens}
            width="100%"
            maxH="13rem"
          />

          <CardBody mb={0} pb={0} pt={4}>
            <Heading size="md" lineHeight="1.4" noOfLines={3}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter w="100%">
            <Text fontSize="sm">3/20/2023 4:00</Text>
            <Box>
              <FontAwesomeIcon
                icon={faCircleUp}
                className="me-2"
                color="gray"
              />
              0
            </Box>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <Image
            objectFit="cover"
            src={acropolisAtAthens}
            width="100%"
            maxH="13rem"
          />

          <CardBody mb={0} pb={0} pt={4}>
            <Heading size="md" lineHeight="1.4" noOfLines={3}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter w="100%">
            <Text fontSize="sm">3/20/2023 4:00</Text>
            <Box>
              <FontAwesomeIcon
                icon={faCircleUp}
                className="me-2"
                color="gray"
              />
              0
            </Box>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <Image
            objectFit="cover"
            src={acropolisAtAthens}
            width="100%"
            maxH="13rem"
          />

          <CardBody mb={0} pb={0} pt={4}>
            <Heading size="md" lineHeight="1.4" noOfLines={3}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter w="100%">
            <Text fontSize="sm">3/20/2023 4:00</Text>
            <Box>
              <FontAwesomeIcon
                icon={faCircleUp}
                className="me-2"
                color="gray"
              />
              0
            </Box>
          </CardFooter>
        </Card>
        <Card variant="borderBottom">
          <Image
            objectFit="cover"
            src={acropolisAtAthens}
            width="100%"
            maxH="13rem"
          />

          <CardBody mb={0} pb={0} pt={4}>
            <Heading size="md" lineHeight="1.4" noOfLines={3}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter w="100%">
            <Text fontSize="sm">3/20/2023 4:00</Text>
            <Box>
              <FontAwesomeIcon
                icon={faCircleUp}
                className="me-2"
                color="gray"
              />
              0
            </Box>
          </CardFooter>
        </Card>
      </Masonry>
    </Box>
  );
}
