import React,{useState, useEffect } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  InputGroup,
  Link,
  InputRightElement,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { PageNavigator } from '../components/PageNavigator'
import {axiosInstance} from "../utils/AxiosInterceptor"
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("");
    const [error, setError] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showPassword, setShowPassword] = useState(false)
    const sendData = () =>{

        axiosInstance.post("/auth/login", {
            "email": email,
            "password": password,
          }).then((response) => {

            let data = response.data;
            if(data.type == "Authorized"){
                setError("Zarejestrowano użytkowika")
                location.href = "/";
                window.localStorage.token = data.token;
                
            }else if(data.type = "UserDoesNotExist"){
                setError("Użytkownik nie istnieje")
            }else if(data.type == "FormError"){
                setError("Wpisałeś złe wartości")
            }
        })
    }

    return (
           <>
    <PageNavigator/>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informacje</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            {error}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Zamknij
            </Button>
            <Link href="/">
                <Button variant='ghost'>Przejdź do strony głównej</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Flex justify="center" align="center">
        
        <Box maxW="lg" bg={useColorModeValue('rgb(248,248,248)', 'gray.700')} p={10} rounded={10}>
            <Stack> 
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Hasło</FormLabel>
              <InputGroup>
                <Input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} required />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
                onClick={()=>{sendData(); onOpen()}}
                loadingText="Wysyłanie"
                size="lg"
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}
                _active={{bg: "red.600"}}>
                Zaloguj się 
              </Button>
            </Stack>
        </Box>
    </Flex>
    </>
    )
}