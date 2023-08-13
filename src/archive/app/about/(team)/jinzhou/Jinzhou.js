import {
  Heading,
  Image,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { jinzhou } from "../data/projectFiles";
import "../assets/Jinzhou.css";

const Jinzhou = () => {
  return (
    <div className="jinzhou-bg px-2 px-sm-5">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 col-xl-4 col-xxl-3 jinzhou-nav">
          <Image borderRadius="full" boxSize="10rem" src={jinzhou} />
          <Heading mt={5}>Jinzhou Wu</Heading>
          <Box backgroundColor="gray.200" p={3} my={3}>
            <Heading size="sm">
              Checkout my{" "}
              <Link
                href="https://schoolofathens.world/user/YqCJL5EPPhfvfeDcRmoYgxuDT4p2"
                _hover={{ color: "blue.500" }}
              >
                profile
              </Link>
            </Heading>
            <Heading size="sm" mt={2}>
              Checkout my{" "}
              <Link
                href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FCV.pdf?alt=media&token=1a6a2d2a-666c-4f20-8bb7-cafc024c23c7"
                isExternal
                _hover={{ color: "blue.500" }}
              >
                CV <ExternalLinkIcon mx="2px" mb="4px" />
              </Link>
            </Heading>
            <Heading size="sm" mt={2}>
              Checkout my{" "}
              <Link
                href="https://scholar.google.com/citations?user=4sQpfukAAAAJ&hl=en&inst=7575085548378563675&oi=ao"
                isExternal
                _hover={{ color: "blue.500" }}
              >
                Google Scholar <ExternalLinkIcon mx="2px" mb="4px" />
              </Link>
            </Heading>
          </Box>
          <Heading size="sm" mb={2}>
            Facts
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>An international student in the U.S.</ListItem>
            <ListItem>High school junior.</ListItem>
            <ListItem>Founder of SchoolOfAthens.world.</ListItem>
            <ListItem>A problem-solver.</ListItem>
          </UnorderedList>
          <Heading size="sm" mt={5} mb={2}>
            What I'm up to recently
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>
              Building{" "}
              <Link
                href="https://github.com/school-of-athens/schoolofathens-world"
                isExternal
                _hover={{ color: "blue.500" }}
              >
                SchoolOfAthens.world
              </Link>
              .
            </ListItem>
            <ListItem>
              Tutoring at{" "}
              <Link
                href="https://schoolhouse.world/u/110552"
                _hover={{ color: "blue.500" }}
              >
                Schoolhouse
              </Link>
              .
            </ListItem>
            <ListItem>
              <Link
                href="https://sumac.spcs.stanford.edu/"
                _hover={{ color: "blue.500" }}
              >
                Stanford University Mathematics Camp
              </Link>{" "}
              2023 (Algebraic Topology)
            </ListItem>
            <ListItem>
              <Link
                href="https://summerofprotocols.com/"
                _hover={{ color: "blue.500" }}
              >
                Summer of Protocols
              </Link>{" "}
              (Ethereum Foundation) Affiliate Researcher
            </ListItem>
          </UnorderedList>

          <Heading size="sm" mt={5} mb={2}>
            Skills
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>
              <b>Programming Languages:</b> C++, Python, Java, JavaScript.
              Currently learning Solidity.
            </ListItem>
            <ListItem>
              <b>Web Development:</b> HTML, CSS, Node.js, Express.js, React.js,
              Next.js, Firebase.
            </ListItem>
            <ListItem>
              <b>AI:</b> Keras, TensorFlow, NumPy, Pandas, Seaborn, Matplotlib.
            </ListItem>
            <ListItem>
              <b>Competitive Programming</b>: USA Computing Olympiad Silver.
            </ListItem>
          </UnorderedList>
          <Heading size="sm" mt={5} mb={2}>
            Hobbies
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>
              Reading news and being aware of what's happening in the world.
            </ListItem>
            <ListItem>Playing the piano.</ListItem>
          </UnorderedList>
        </div>
        <div className="col-12 col-md-7 col-lg-8 col-xl-8 col-xxl-9 jinzhou-body">
          <Heading size="lg" mb={3}>
            About me
          </Heading>
          <Text mb={7}>
            I am a high school student from China studying in the U.S. With
            first-hand experience of the world's polarization, I strive to find
            a solution by providing multiple perspectives. I am working on a
            democratic forum for voting, discussion, and debate. By exploring
            both technical and social protocols, I hope to build a modern
            version of democracy, with accountable votes and autonomous
            decision-making thanks to blockchain and smart contracts. It's time
            for a change in democracy- a technical one.
          </Text>
          <Heading size="lg" mb={3}>
            About SchoolOfAthens.world
          </Heading>
          <Text mb={7}>
            I decided to create SchoolOfAthens.world to tackle one of the most
            pressing issues of our time: polarization. I believe that everyone
            has their own perspectives and experiences, and that it is important
            to listen to them in order to create a more inclusive and
            understanding world. I was inspired by the ancient Athenian model of
            democracy, where citizens were encouraged to actively participate in
            discussions and debates.
            <br />
            By creating a democratic forum for voting, discussion, and debate, I
            hope to create a platform where people from diverse backgrounds can
            engage in meaningful dialogue and learn from each other. I believe
            that by providing multiple perspectives on the same topic, we can
            encourage empathy and reduce societal divisions.
          </Text>
          <Heading size="lg" mb={3}>
            Writings & Publications
          </Heading>
          <Heading size="md" mb={1} color="gray.500">
            History & Society
          </Heading>
          <Flex
            justifyContent="space-between"
            borderBottom="2px solid"
            borderColor="gray.200"
          >
            <Link
              display="flex"
              alignItems="center"
              href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FNullification%20Crisis.pdf?alt=media&token=c4ba4c7f-e8cb-457d-8e45-e59982095c25"
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Heading size="sm" lineHeight={2}>
                Andrew Jackson and the Nullification Crisis
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text
              whiteSpace="nowrap"
              fontSize="sm"
              display="flex"
              alignItems="center"
              mt={0}
            >
              AP U.S. History
            </Text>
          </Flex>
          <Text></Text>
          <Flex
            justifyContent="space-between"
            borderBottom="2px solid"
            borderColor="gray.200"
          >
            <Link
              display="flex"
              alignItems="center"
              href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FTruman%20and%20Taiwan.pdf?alt=media&token=356ef2f7-5135-4a53-b7cc-17c439b92fa7"
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Heading size="sm" lineHeight={2}>
                President Truman and the Decisioin to Neutralize the Taiwan
                Strait
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text
              whiteSpace="nowrap"
              display="flex"
              alignItems="center"
              fontSize="sm"
              mt={0}
            >
              AP U.S. History
            </Text>
          </Flex>
          <Text>{/* <b>Abstract</b> */}</Text>
          <Heading size="md" mb={1} mt={3} color="gray.500">
            Deep Learning & Computer Vision
          </Heading>
          <Flex
            justifyContent="space-between"
            borderBottom="2px solid"
            borderColor="gray.200"
          >
            <Link
              display="flex"
              alignItems="center"
              href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FNIPS2022submission__Final_.pdf?alt=media&token=916ee185-808c-4905-890e-efded0edeada"
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Heading size="sm" lineHeight={2}>
                Learn Complementary Pseudo-label for Source-free Domain Adaptive
                Medical Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text
              whiteSpace="nowrap"
              display="flex"
              alignItems="center"
              fontSize="sm"
              mt={0}
            >
              NeurIPS 2022 workshop
            </Text>
          </Flex>
          <Text>{/* <b>Abstract</b>:  */}</Text>
          <Flex
            justifyContent="space-between"
            borderBottom="2px solid"
            borderColor="gray.200"
          >
            <Link
              display="flex"
              alignItems="center"
              href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FIPMI2023_dataaugFL_.pdf?alt=media&token=f2f9ad24-9179-4074-bb77-f347d2980e88"
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Heading size="sm" lineHeight={2}>
                Vicinal Feature Statistics Augmentation for Federated 3D Medical
                Volume Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text
              whiteSpace="nowrap"
              display="flex"
              alignItems="center"
              fontSize="sm"
              mt={0}
            >
              IPMI 2023
            </Text>
          </Flex>
          <Text>{/* <b>Abstract</b> */}</Text>
          <Flex
            justifyContent="space-between"
            borderBottom="2px solid"
            borderColor="gray.200"
          >
            <Link
              display="flex"
              alignItems="center"
              href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2Fmiccai2023_COST_.pdf?alt=media&token=6e20ffba-2c27-48ae-89ad-87a8c00af575"
              isExternal
              _hover={{ color: "blue.500" }}
            >
              <Heading size="sm" lineHeight={2}>
                Balanced Complementary Self-Training for Source-free Domain
                Adaptive Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text
              whiteSpace="nowrap"
              display="flex"
              alignItems="center"
              fontSize="sm"
              mt={0}
            >
              Submitted to MICCAI 2023
            </Text>
          </Flex>
          <Text>{/* <b>Abstract</b> */}</Text>
        </div>
      </div>
    </div>
  );
};

export default Jinzhou;
