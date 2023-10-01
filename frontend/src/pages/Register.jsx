'use client'
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
  InputRightElement,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Link,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { PageNavigator } from '../components/PageNavigator'
import {axiosInstance} from "../utils/AxiosInterceptor"

export function Register() {
      const [showPassword, setShowPassword] = useState(false)
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("");
    const [error, setError] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sendData = () =>{

        axiosInstance.post("/auth/register", {
            "email": email,
            "password": password,
            "displayName": displayName
          }).then((response) => {

            let data = response.data;
          console.log(data)
            if(data.type == "Authorized"){
                setError("Zarejestrowano użytkowika")
                location.href = "/";
                window.localStorage.token = data.token;
                
            }else if(data.type = "UserAlreadyExist"){
                setError("Użytkownik już istnieje")
            }else if(data.type == "FormError"){
                setError("Wpisałeś złe wartości")
            }
            console.log(error)
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
          <ModalBody>
          <Text>
              {error}
          </Text>
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
            <FormControl isRequired>
              <FormLabel>Wyświetlana nazwa</FormLabel>
              <Input onChange={(e) => setDisplayName(e.target.value)} maxLength="15" type="text" required/>
            </FormControl>
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
                Zarejestruj się
              </Button>
            </Stack>
        </Box>
    </Flex>
    </>
  )
}