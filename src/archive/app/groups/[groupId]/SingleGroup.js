
import { Box, Image } from "@chakra-ui/react";
import sampleGroup from "../data/sampleGroup";

function SingleGroup() {

    return (
        <Box height="100vh" bg="gray.300">
            
            
            <Image src={sampleGroup.photoURL} />
            
        </Box>
    );


}

export default SingleGroup;