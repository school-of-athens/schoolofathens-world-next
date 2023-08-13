import { Box, Heading, Text, Card, CardBody } from "@chakra-ui/react";

export default function Votes({ userData }) {
  return (
    <Box className="profile-body--section">
      <Heading size="lg" mb={4} ml={1}>Votes</Heading>
      <Card variant="plain" px={0} pt={0}>
        <CardBody px={0}>
          <Box className="profile-body--vote flex-column flex-md-row">
            <Text className="fw-bold">Is Democracy a Means or an End?</Text>
            <Text>
              Voted <b>An End</b>
            </Text>
          </Box>
          <Box className="profile-body--vote flex-column flex-md-row">
            <Text className="fw-bold">Is Democracy a Means or an End?</Text>
            <Text>
              Voted <b>An End</b>
            </Text>
          </Box>
          <Box className="profile-body--vote flex-column flex-md-row">
            <Text className="fw-bold">Is Democracy a Means or an End?</Text>
            <Text>
              Voted <b>An End</b>
            </Text>
          </Box>
          <Box className="profile-body--vote flex-column flex-md-row">
            <Text>Load More...</Text>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
