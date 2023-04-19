import { chakra } from "@chakra-ui/react";
import{
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const UrlShrinkerForm = () => {
    const bg = useColorModeValue('white','gray.800');

    return (
        <Flex direction="column" bg={bg}>
            {/* Form */}
            <FormControl id="url">
                <FormLabel>URL to Shorten</FormLabel>
                <Input type="url"/>
            </FormControl>
            <Button>SHORTEN LINK</Button>
            
            {/* Dashboard */}
            <Box>
                <Text fontWeight="bold" fontFamily="Baloo Tamma 2" fontSize="lg">
                    Your Links
                </Text>
                {/* Render list of shortened links */}
            </Box>
        </Flex>
    );
};

export default UrlShrinkerForm;