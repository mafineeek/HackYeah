import { Grid, GridItem, Text, useColorModeValue, Image, Avatar, Spinner, Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, Badge, Stack, Center, AccordionIcon, Alert } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/AxiosInterceptor';
import { useSearchParams } from 'react-router-dom';
export const SchoolPreviewBody = () => {

    const [school, setSchool] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        axiosInstance.get(`/school/view/${searchParams.get('id')}`).then((response) => {
            let data = response.data
            data.comments.length = 3;
            setSchool(data);
        });
    }, [])

    return (

        <>
            {school && (
                <Grid
                    padding={5}
                    boxShadow={20} bg={useColorModeValue('rgb(248,248,248)', 'gray.700')} borderRadius={20}
                    minHeight='500px'
                    templateAreas='"Header Header Header" 
                             "Aside Main Main" 
                             "Aside Main Main" 
                             "Aside Gallery Gallery" 
                             "Aside Gallery Gallery" ' templateColumns='1fr 1fr 1fr'>

                    <GridItem area={"Header"}>
                        <Text as='h2' fontSize='x-large'>{school.school_name}</Text>
                    </GridItem>
                    <GridItem area={"Aside"} display='flex' flexDirection='column' alignItems='center' gap={10}>
                        <Avatar src={'https://i.imgur.com/mWFx9P7.png'} boxSize={200} />
                        {/* <Text>
                            Lokalizacje
                        </Text>
                        <Text>
                            Kierunki
                        </Text>
                        <Text>
                            Nagrody
                        </Text> */}

                    </GridItem>
                    <GridItem area={"Main"} textAlign='justify'>
                        <Accordion defaultIndex={[0]} allowMultiple allowToggle width={'100%'} textAlign={'center'}>
                            <AccordionItem textAlign={'center'}>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Lokalizacja
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Badge>{school.location.city} - {school.location.street_address}</Badge>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Kierunki
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Stack direction={'column'} spacing={5}>
                                        {school.classProfiles.map((profile) => (
                                            <Badge>{profile}</Badge>
                                        ))}
                                    </Stack>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" whiteSpace="pre-wrap" flex='1' textAlign='left'>
                                            Nagrody
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Stack direction={'column'} spacing={5}>
                                        {school.awards.map((award) => (
                                            <Badge colorScheme='green' whiteSpace={'normal'}>{award}</Badge>
                                        ))}
                                        {school.awards.length == 0 && <Badge whiteSpace={'normal'} colorScheme='red'>Szkoła nie otrzymała żadnej nagrody</Badge>}
                                    </Stack>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Ostatnie komentarze
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {school.comments.map((comment) => (
                                        <Alert marginTop={5} status='info'>
                                            <Text>{comment}</Text>
                                        </Alert>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </GridItem>
                    <GridItem area={"Gallery"}>

                    </GridItem>

                </Grid>
            )}
            {!school && (
                <Spinner />
            )}
        </>



    )
}