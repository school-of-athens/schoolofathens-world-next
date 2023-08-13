import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCheckToSlot,
  faCommentDots,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Heading, Text, Card, CardBody } from "@chakra-ui/react";

export default ({ userData }) => {

  return (
    <Box className="col-md-4 col-12">
      <Box className="profile-body--section">
        <Heading size="lg" ml={1} mb={4}>
          About me
        </Heading>
        <Card variant="plain">
          <Text lineHeight="1.75">
            {userData?.bio}
          </Text>
        </Card>
      </Box>
      <Box className="profile-body--section">
        <Heading size="lg" ml={1}>
          Stats
        </Heading>
        <Box className="profile-body--card" id="stats">
          <Text>
            <FontAwesomeIcon icon={faThumbsUp} className="icon-gray" />0 Upvotes
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheckToSlot} className="icon-gray" />{userData?.votes?.length}{" "}
            Votes
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCommentDots} className="icon-gray" />{userData?.opinions?.length}{" "}
            Opinions
          </Text>
          <Text>
            <FontAwesomeIcon icon={faFeather} className="icon-gray" />{userData?.insights?.length}{" "} Insights
          </Text>
          <Box
            className="progress"
            role="progressbar"
            aria-label="Warning striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <Box
              className="progress-bar progress-bar-striped bg-warning"
              style={{ width: "10%" }}
            ></Box>
          </Box>
          <Text>0 Points to the next level ()</Text>
        </Box>
      </Box>
      <Box className="profile-body--section">
        <Heading size="lg" ml={1} mb={4}>
          Following
        </Heading>
        <Card variant="plain">
          <Text>Currently Not Available</Text>
        </Card>
      </Box>
      <Box className="profile-body--section">
        <Heading size="lg" ml={1} mb={4}>
          Followers
        </Heading>
        <Card variant="plain">
          <Text>Currently Not Available</Text>
        </Card>
      </Box>
      <Box className="profile-body--section">
        <h3>Badges</h3>
        <Card variant="plain">
          <Text>Currently Not Available</Text>
        </Card>
      </Box>
    </Box>
  );
};
