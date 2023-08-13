"use client";

import AboutMe from "./components/AboutMe";
import Groups from "./components/Groups";
import Insights from "./components/Insights";
import Opinions from "./components/Opinions";
import ProfileHead from "./components/ProfileHead";
import Votes from "./components/Votes";
import useUserData from "./hooks/useUserData";
import { Box } from "@chakra-ui/react";
import "@/assets/UserProfile.css";

export default function UserProfile({ params }) {
  const userId = params.id;
  const userData = useUserData(userId);
  console.log(userData)

  return (
    <>
      <ProfileHead userData={userData} />
      <Box className="container" my={10} px={{ base: 2, xl: 10 }}>
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
