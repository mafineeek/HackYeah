'use client'
import React from 'react'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
} from '@chakra-ui/react'

export const HomeHero = () => {

  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 9, md: 12 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} maxWidth={'2xl'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
          >
          
            
            <Image src={'https://i.imgur.com/mWFx9P7.png'} boxSize='80px' position='absolute'  />
            <Text
              as={'span'}
              position={'relative'}
              zIndex={2}
              >
              Zintegrowany Portal
            </Text>
            <br />
            <Text
              as={'span'}
              position={'relative'}
              zIndex={2}
              >
              Planowania Edukacji
            </Text>
    
           
            <br />
          </Heading>
          <Text marginBottom="0.5" color={'gray.500'}>
          Sprawdź swoje predyspozycji zawodowe korzystając z naszego <br/> <Text as={'span'} color={'red.400'} fontWeight={'bold'}>testu kompetencji</Text>
          </Text>
          <Text color={'gray.500'}>
            Skorzystaj z naszej <b>inteligentnej</b> wyszukiwarki szkół średnich i uczelni, która pozwoli znaleźć <Text as={'span'} color={'red.400'} fontWeight={'bold'}>idealne miejsce</Text> dla Ciebie
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            
            <InputGroup >
              <InputLeftAddon children={(
                <Select placeholder={'Rodzaj placówki'} border="none" _focusVisible={{
                  outline: 'none'
                }}>
                  <option value="highSchool">Szkoła średnia</option>
                  <option value="university">Uniwersystet</option>
                </Select>
              )} />
              <Input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Wpisz frazę wyszukiwania'></Input>
            </InputGroup>
            <Button variant={'outline'} borderColor={'red.400'} color={'red.400'} _hover={{
              borderColor: 'red.500'
            }} onClick={() => {
              window.location.href = `/school-list?query=${searchQuery}`
            }}>Szukaj</Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            // zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          /> */}
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://bi.im-g.pl/im/b1/a8/1a/z27954097AMP.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}


const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}