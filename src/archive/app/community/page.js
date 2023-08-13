"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBookTanakh,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Community() {
  return (
    <>
      <Box textAlign="center" bg="gray.300" py="5rem">
        <Heading>Community</Heading>
      </Box>
      <Box className="container" minH="60vh" px="1rem" py="5rem">
        <Card padding="3" pb={7} mb="10">
          <CardHeader className="text-center">
            <Heading>
              <FontAwesomeIcon icon={faSitemap} className="me-3" />
              Check Out Our Agenda on Notion
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <Link
              href="https://schoolofathens.notion.site/The-School-of-Athens-91b262b412c349a2a912e7e4f5f9bddc"
              isExternal
            >
              <Button variant="blue">Check Out</Button>
            </Link>
          </CardBody>
        </Card>
        <Card padding="3" pb={7} mb="10">
          <CardHeader className="text-center">
            <Heading>
              <FontAwesomeIcon icon={faGithub} className="me-3" />
              Join the Developer Group on Github
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <Link
              href="https://github.com/school-of-athens/schoolofathens-world"
              isExternal
            >
              <Button variant="blue">Join</Button>
            </Link>
          </CardBody>
        </Card>
        <Card padding="3" pb={7} mb="10">
          <CardHeader className="text-center">
            <Heading>
              <FontAwesomeIcon icon={faDiscord} className="me-3" />
              Join Discord
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <Link href="https://discord.gg/dmWkdSYzYH" isExternal>
              <Button variant="blue">Join</Button>
            </Link>
          </CardBody>
        </Card>
        <Card padding="3" pb={7} mb="10">
          <CardHeader className="text-center">
            <Heading mb="4">
              <FontAwesomeIcon icon={faCode} className="me-3" />
              Become a Developer
            </Heading>
            <Text px="5">
              We provide free tutoring on how to become a web developer every
              Tuesday on schoolhouse.world, a free peer-tutoring website founded
              by Sal Khan. The course will cover everything you need to know to
              become a developer of this website.
            </Text>
          </CardHeader>
          <CardBody textAlign="center" pt="0">
            <Link href="https://discord.gg/dmWkdSYzYH" isExternal>
              <Button variant="blue">Enroll</Button>
            </Link>
          </CardBody>
        </Card>
        <Card padding="3" pb={7}>
          <CardHeader className="text-center">
            <Heading>
              <FontAwesomeIcon icon={faBookTanakh} className="me-3" />
              Developer Handbook
            </Heading>
          </CardHeader>
          <CardBody textAlign="center" isExternal>
            <Link href="https://schoolofathens.notion.site/Web-Developer-Handbook-20034d2870e8425f8b7c181a494397ce">
              <Button variant="blue">Open</Button>
            </Link>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
