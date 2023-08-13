import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Box, Flex, GridItem, Stack, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

export default function () {

  const authRedirect = useAuthRedirect();

  return (
    <GridItem
      colSpan={{ base: 12, md: 4 }}
      py={4}
      px={{ base: 5, md: 7, xl: 10 }}
    >
      <Box position="sticky" top="6rem">
        <FormControl mt={4}>
          <FormLabel>Search</FormLabel>
          <Flex mb={5}>
            <Input
              me={2}
              variant="primary"
              type="search"
              placeholder="Search (Disabled)"
              isDisabled
            />
            <Button colorScheme="blue">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Flex>
          <FormLabel>Sort by</FormLabel>
          <Select variant="primary" defaultValue="DEFAULT" mb={5} isDisabled>
            <option value="DEFAULT">Default</option>
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Votes</option>
            <option value="OPINIONS">Opinions</option>
            <option value="DUE_DATE">Due Date</option>
          </Select>
        </FormControl>

        <Stack direction="column" alignItems="start" my={2} spacing={3}>
          <Button variant="gray">Forum Rules</Button>
          <Button variant="blue" onClick={() => authRedirect("/learn/new")}>
          Compose
        </Button>
        </Stack>
      </Box>
    </GridItem>
    // <div className="col-lg-3 col-md-4 px-sm-5 px-3 col-12 pb-4">
    //   <div className="query-selector">
    //     <h5>Search</h5>
    //     <div className="search">
    //       <input
    //         className="form-control me-2"
    //         type="search"
    //         placeholder="Search (Disabled)"
    //         disabled
    //       />
    //       <button className="btn btn-blue" type="submit">
    //         <FontAwesomeIcon icon={faMagnifyingGlass} />
    //       </button>
    //     </div>

    //     <h5>Sort by</h5>
    //     <select className="form-select" aria-label="select">
    //       <option selected value="NEWEST">
    //         Newest
    //       </option>
    //       <option value="VOTES">Upvotes</option>
    //     </select>
    //     <h5>Topics</h5>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Current Events"
    //         id="CurrentEvents"
    //       />
    //       <label className="form-check-label" for="CurrentEvents">
    //         Current Events
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="International"
    //         id="International"
    //       />
    //       <label className="form-check-label" for="International">
    //         International
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Domestic"
    //         id="Domestic"
    //       />
    //       <label className="form-check-label" for="Domestic">
    //         Domestic
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Politics"
    //         id="Politics"
    //       />
    //       <label className="form-check-label" for="Politics">
    //         Politics
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Society"
    //         id="Society"
    //       />
    //       <label className="form-check-label" for="Society">
    //         Society
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="History"
    //         id="History"
    //       />
    //       <label className="form-check-label" for="History">
    //         History
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Science"
    //         id="Science"
    //       />
    //       <label className="form-check-label" for="Science">
    //         Science
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Art"
    //         id="Art"
    //       />
    //       <label className="form-check-label" for="Art">
    //         Art
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Education"
    //         id="Education"
    //       />
    //       <label className="form-check-label" for="Education">
    //         Education
    //       </label>
    //     </div>
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         value="Health"
    //         id="Health"
    //       />
    //       <label className="form-check-label" for="Health">
    //         Health
    //       </label>
    //     </div>
    //   </div>
    // </div>
  );
}
