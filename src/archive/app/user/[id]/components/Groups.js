import { acropolisAtAthens } from "@/data/projectFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import { faCircleUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  576: 1,
};

export default function Groups({ userData }) {
  return (
    <Box className="profile-body--section">
      <Heading size="lg" ml={1} mb={4}>
        Groups
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
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
            <Heading size="md" lineHeight="1.4" noOfLines={2}>
              This is the Title of the Article, It Can At Most Hold Three Lines
            </Heading>
          </CardBody>
          <Divider variant="gray" />
          <CardFooter>
            <Box></Box>
            <Box>
              <FontAwesomeIcon icon={faUserGroup} className="me-2 icon-gray" />0
            </Box>
          </CardFooter>
        </Card>
      </Masonry>
    </Box>
  );
}
