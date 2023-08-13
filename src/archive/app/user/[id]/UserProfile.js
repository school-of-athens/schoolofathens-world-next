import {
  AboutMe,
  Groups,
  Insights,
  Opinions,
  ProfileHead,
  Votes,
  useUserData,
} from "../features/UserProfile";
import { Box, Container } from "@chakra-ui/react";
import "../assets/UserProfile.css";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { userId } = useParams();
  const userData = useUserData(userId);

  return (
    <>
      <ProfileHead userData={userData} />
      <Box className="container" my={10} px={{base: 2, xl: 10}}>
        <Box className="row">
          <AboutMe userData={userData} />
          <Box className="col-md-8 col-12">
            <Votes userData={userData} />
            <Opinions userData={userData} />
            <Insights userData={userData} />
            <Groups userData={userData} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
