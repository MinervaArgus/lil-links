import { ChakraProvider, CSSReset, extendTheme, VStack, Box } from "@chakra-ui/react"
import { UserContextProvider } from '../contexts/UserContextProvider';
import { Auth } from '@supabase/ui';
import supabase from '../lib/supabase';
import UrlShrinkerForm from "../components/UrlShrinkerForm";

// Chakra UI theme customization
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Libre Baskerville, serif',
        color: 'gray.900',
        lineHeight: 'tall',
      },
    },
  },
});
export default function Home() {
  const { user } = Auth.useUser();

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <UserContextProvider supabaseClient={supabase}>
        <VStack align="center" justify="center" minH="100vh" bgGradient="linear(to-r, purple.500, blue.500, black)">
          <Box p={4} borderRadius="md" bg="white" boxShadow="lg">
            {user ? (
              <>
                <UrlShortenerForm />
              </>
            ) : (
              <Auth supabaseClient={supabase}>
                <Auth.LogIn />
                <Auth.SignUp />
              </Auth>
            )}
          </Box>
        </VStack>
      </UserContextProvider>
    </ChakraProvider>
  );
}
