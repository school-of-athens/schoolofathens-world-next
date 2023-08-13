"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ParallaxText from "@/features/Home/components/ParallaxText";

export default function Home() {
  return (
    <>
      <Box>
        <Box bg="gray.100">
          <Container maxW="7xl" py={24}>
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem
                colSpan={7}
                display="flex"
                justifyContent="center"
                alignItems="start"
                flexDirection="column"
                me={12}
              >
                <Heading>Welcome to the School of Athens</Heading>

                <Text fontSize="lg" lineHeight={2} mt={2}>
                  We are a democratic forum on blockchain built by high school
                  students, aiming to address polarization by providing multiple
                  perspectives to the world.
                </Text>
                <Button variant="light">Sign up now</Button>
              </GridItem>
              <GridItem colSpan={5}>
                <Image
                  src="/original.png"
                  borderRadius="xl"
                  alt="School of Athens"
                />
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container maxW="7xl" py={24}>
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem colSpan={6} me={12}>
                <Image
                  src="https://newspress.com/wp-content/uploads/2022/02/ed-Argueing-020622.jpg"
                  borderRadius="xl"
                  alt="School of Athens"
                />
              </GridItem>
              <GridItem
                colSpan={6}
                display="flex"
                justifyContent="center"
                alignItems="start"
                flexDirection="column"
              >
                <Heading>The idea comes from this...</Heading>

                <Text fontSize="lg" lineHeight={2} mt={2}>
                  Frequently people are only exposed to a single story...
                </Text>
                <Button variant="light">Help us achieve this goal</Button>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box bg="gray.100">
          <Container maxW="7xl" py={24}>
            <Heading mb={4}>Features</Heading>
            <Grid templateColumns="repeat(12, 1fr)" gap={6}>
              <GridItem colSpan={3}>
                <Card variant="plain" py={12}>
                  <Heading>Forum</Heading>
                  <Text>Where you vote and share opinions.</Text>
                </Card>
              </GridItem>
              <GridItem colSpan={3}>
                <Card variant="plain" py={12}>
                  <Heading>Learn</Heading>
                  <Text>Where you take ideas and leave ideas.</Text>
                </Card>
              </GridItem>
              <GridItem colSpan={3}>
                <Card variant="plain" py={12}>
                  <Heading>Groups</Heading>
                  <Text>
                    Where you form organizations and join your friends.
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={3}>
                <Card variant="plain" py={12}>
                  <Heading>Community</Heading>
                  <Text>Make this website decentralized and autonomous.</Text>
                </Card>
              </GridItem>
            </Grid>
            <Flex justifyContent="center">
              <Image h="20rem" src="/people.png" alt="People" mt={12} />
            </Flex>
          </Container>
        </Box>
        <Box bg="blue.100">
          <Container maxW="7xl" py={24}>
            <Heading>Built with the most advanced technologies</Heading>
            <Text fontSize="lg" lineHeight={2} mt={2}>
              We used the most advanced technologies and frameworks to build our
              forum.
            </Text>
            <HStack spacing={8} mt={6}>
              <svg
                width="120px"
                aria-label="Next.js logotype"
                height="18"
                role="img"
                viewBox="0 0 394 79"
              >
                <path
                  d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                  fill="var(--geist-foreground)"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                  fill="var(--geist-foreground)"
                ></path>
                <path
                  d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                  fill="var(--geist-foreground)"
                ></path>
              </svg>
              <svg
                width="120"
                viewBox="0 0 998 257"
                xmlns="http://www.w3.org/2000/svg"
                class="css-2dk2qc"
              >
                <path
                  d="M388.5 115.302c17.612 0 25.466 11.424 28.084 21.658l24.752-9.044c-4.76-18.564-21.896-38.08-53.074-38.08-33.32 0-59.262 25.704-59.262 61.404 0 35.224 25.942 61.642 59.976 61.642 30.464 0 47.838-19.754 53.312-37.842l-24.276-8.806c-2.618 8.806-10.948 21.42-29.036 21.42-17.374 0-32.368-13.09-32.368-36.414s14.994-35.938 31.892-35.938zM484.894 141.244c.476-14.756 8.806-26.18 24.038-26.18 17.374 0 23.8 11.424 23.8 25.704v68.544h27.608v-73.304c0-25.466-13.804-45.934-42.364-45.934-12.138 0-25.228 4.284-33.082 14.518V37h-27.608v172.312h27.608v-68.068zM577.29 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L650.594 156v5.236c0 22.61-13.328 29.988-28.798 29.988zM810.108 93.406h-36.652l-44.506 46.886V37h-27.37v172.312h27.37v-32.368l14.28-14.994 34.034 47.362h33.796l-48.552-66.878 47.6-49.028zM889.349 92.692c-1.19-.238-4.046-.714-7.378-.714-15.232 0-28.084 7.378-33.558 19.992V93.406h-26.894v115.906h27.608v-55.216c0-21.658 9.758-34.034 31.178-34.034 2.856 0 5.95.238 9.044.714V92.692zM895.968 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L969.272 156v5.236c0 22.61-13.328 29.988-28.798 29.988z"
                  fill="#2D3748"
                ></path>
                <rect
                  width="257"
                  height="257"
                  rx="128.5"
                  fill="url(#logo)"
                ></rect>
                <path
                  d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z"
                  fill="#fff"
                ></path>
                <defs>
                  <linearGradient
                    id="logo"
                    x1="128.5"
                    x2="128.5"
                    y2="257"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7BCBD4"></stop>
                    <stop offset="1" stop-color="#29C6B7"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="28"
                fill="none"
              >
                <path
                  fill="#000"
                  d="M44.444 22.826h3.933V8.727h5.665V5.623H38.753v3.104h5.691v14.1ZM54.871 22.826h3.83V9.891h-3.83v12.935Zm-.18-14.642h4.164V5.623H54.69v2.56ZM69.85 23.24c4.216 0 5.95-3.208 5.95-6.881 0-3.726-1.734-6.882-5.95-6.882-2.225 0-3.726.854-4.631 2.329V9.89h-3.83V28h3.83v-7.114c.905 1.474 2.406 2.354 4.63 2.354Zm-4.631-6.881c0-2.639 1.034-3.88 3.44-3.88 2.432 0 3.312 1.19 3.312 3.88 0 2.664-.88 3.88-3.312 3.88-2.406 0-3.44-1.242-3.44-3.88ZM83.633 22.826h2.432v-3.053h-3.363V12.79h3.725V9.89h-3.725V6.813h-1.94l-1.579 3.052-2.664 1.087v1.837h2.354v5.38c0 3.08 1.086 4.657 4.76 4.657ZM93.545 23.24c2.225 0 3.674-.88 4.527-2.354v1.94h3.829V9.891h-3.829v1.915c-.853-1.475-2.302-2.329-4.527-2.329-4.269 0-5.82 3.13-5.82 6.882 0 3.673 1.552 6.881 5.82 6.881Zm-2.018-6.881c0-2.768.88-3.88 3.208-3.88 2.25 0 3.337 1.06 3.337 3.88 0 2.794-1.086 3.88-3.337 3.88-2.328 0-3.208-1.138-3.208-3.88ZM113.1 23.24c4.217 0 5.95-3.208 5.95-6.881 0-3.726-1.733-6.882-5.95-6.882-2.225 0-3.725.854-4.631 2.329V9.89h-3.828V28h3.828v-7.114c.906 1.474 2.406 2.354 4.631 2.354Zm-4.631-6.881c0-2.639 1.035-3.88 3.441-3.88 2.432 0 3.311 1.19 3.311 3.88 0 2.664-.879 3.88-3.311 3.88-2.406 0-3.441-1.242-3.441-3.88ZM22.305 3.043A13.638 13.638 0 0 0 13.695 0c-3.26 0-6.256 1.14-8.608 3.043h17.218ZM.78 9.13a13.647 13.647 0 0 1 1.526-3.043h22.779c.628.939 1.144 1.96 1.527 3.043H.779ZM.084 15.217a13.846 13.846 0 0 1 0-3.043h27.224a13.83 13.83 0 0 1 0 3.043H.084ZM2.306 21.304A13.647 13.647 0 0 1 .78 18.261h25.833a13.648 13.648 0 0 1-1.527 3.043H2.306ZM22.305 24.348a13.638 13.638 0 0 1-8.61 3.043c-3.26 0-6.256-1.14-8.608-3.043h17.218Z"
                ></path>
              </svg>
              <Image
                width="120px"
                src="https://www.gstatic.com/devrel-devsite/prod/vca930ea4481fa25f3cdb030ae8a063116e499d7117ac90e4ee9a28c6c1a44870/firebase/images/lockup.svg"
                alt="Firebase"
              ></Image>
              <Flex alignItems="center">
                <svg
                  height="40"
                  viewBox="0 0 115 182"
                  focusable="false"
                  class="chakra-icon css-1io60e2"
                >
                  <path
                    d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z"
                    fill="#F0CDC2"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z"
                    fill="#C9B3F5"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z"
                    fill="#88AAF1"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z"
                    fill="#C9B3F5"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z"
                    fill="#F0CDC2"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z"
                    fill="#B8FAF6"
                    stroke="#1616B4"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text mb={0} ms={3} fontSize="lg">Ethereum</Text>
              </Flex>
            </HStack>
          </Container>
        </Box>
        <Box bg="purple.100">
          <Box color="purple.900" py={24} pb={12}>
            <ParallaxText baseVelocity={-5}>
              <FontAwesomeIcon icon={faPlay} />
              Vote On
            </ParallaxText>
            <ParallaxText baseVelocity={5}>Blockchain</ParallaxText>
          </Box>
          <Container maxW="7xl" pb={24}>
            <Heading>Integrated with Web3</Heading>
            <Text fontSize="lg" lineHeight={2} mt={2}>
              We invented a protocol that creates a new form of democracy in
              Web3. Here you can vote on blockchain. The protocol also allows
              the users to be the owner of this website, as they have to power
              to vote on whether to approve an update.
            </Text>
          </Container>
        </Box>
        <Flex justifyContent="center" py={48}>
          <Heading>This page is still being developed...</Heading>
        </Flex>
      </Box>
    </>
  );
}
