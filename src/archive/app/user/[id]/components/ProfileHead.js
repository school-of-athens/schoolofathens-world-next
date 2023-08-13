import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Avatar, Badge, Box, Button, Heading, Text } from "@chakra-ui/react";

export default function ProfileHead({ userData }) {
  return (
    <Box  pt={12} bgColor="gray.100" borderBottom="3px solid" borderColor="gray.300">
      <Box className="container" my={10} px={{base: 2, xl: 10}}>
        <Box className="profile-head--wrapper flex-column flex-md-row">
          <Avatar
            // src={auth.currentUser.photoURL}
            src={userData?.photoURL}
            boxSize="10rem"
            mr="3rem"
            referrerPolicy="no-referrer"
          />
          <Box className="profile-head--body flex-md-row flex-column mt-4 align-items-start align-items-md-center">
            <Box className="mb-2">
              <Box display="flex" alignItems="center" mb={2}>
                <Heading>{userData?.displayName}</Heading>
                {userData?.groups?.includes("developer") && (
                  <Badge colorScheme="blue" ml={3} fontSize="lg">
                    Developer
                  </Badge>
                )}
                {userData?.groups?.includes("artist") && (
                  <Badge colorScheme="purple" ml={3} fontSize="lg">
                    Artist
                  </Badge>
                )}
                {userData?.groups?.includes("editor") && (
                  <Badge colorScheme="cyan" ml={3} fontSize="lg">
                    Editor
                  </Badge>
                )}
              </Box>

              <Text mb={2}>
                Joined in{" "}
                {userData?.joinDate
                  ?.toDate()
                  .toLocaleString("default", { month: "short" })}
                , {userData?.joinDate?.toDate().getFullYear()}
              </Text>
              <Text>
                {userData?.followers?.length} Followers |{" "}
                {userData?.following?.length} Following
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
