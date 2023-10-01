import { Box, ButtonGroup, Button, Switch, useColorMode, Link, IconButton } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import { FaMoon, FaSun } from "react-icons/fa"
export const PageNavigator = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box marginBottom="10" marginTop={5} display='flex' justifyContent='left' width="100vw" position='relative'>
            <Box>
                <ButtonGroup justifyContent="space-beetween" spacing='5'>
                    <Link href="/">
                        <Button colorScheme='red' size='sm' variant='outline'>Strona Główna</Button>
                    </Link>
                    <Link href="/school-list?query=">
                        <Button colorScheme='red' size='sm' variant='outline'>Wykaz Szkół</Button>
                    </Link>
                    <Link href="/quiz">
                        <Button colorScheme='red' size='sm' variant='outline'>Test Kompetencji Zawodowych</Button>
                    </Link>

                    <Link href="/disability">
                        <Button colorScheme='red' size='sm' variant='outline'>Dysfunkcje Zdrowotne</Button>
                    </Link>
                    <Link href="/login">
                        <Button colorScheme='red' size='sm' variant='outline'>Logowanie</Button>
                    </Link>

                </ButtonGroup>
                <Box position='absolute' right='175px' top='0'>
                    <Switch size='lg' padding='2px 20px 0px 20px' onChange={
                        () => toggleColorMode()
                    } />
                </Box>
            </Box>
        </Box>

    );
}