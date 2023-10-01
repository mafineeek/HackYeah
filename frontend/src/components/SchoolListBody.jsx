import { useState, useEffect } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Box,
  Text,
  Button,
  Badge,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { axiosInstance } from "../utils/AxiosInterceptor"
import { Link, useSearchParams } from "react-router-dom"
export const SchoolListBody = () => {
  const [schools, setSchools] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(
    () => {
      axiosInstance.get(`/school/search?query=${searchParams.get('query')}`, {
      }).then((response) => {
        let data = response.data
        setSchools(data);
      })
    }, []);

  return (
    <>
      {schools.length > 0 && (
        <TableContainer width='75%'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Logo szkoły</Th>
                <Th>Krótkie informacje</Th>

              </Tr>
            </Thead>
            <Tbody>
              {schools.map((school, index) => {
                return (
                  <>
                    <Tr>
                      
                      <Td rowSpan='3'>
                        <Image src={'https://i.imgur.com/mWFx9P7.png'}  boxSize='100px' objectFit='cover' />
                      </Td>
                      {/* Nazwa szkoly */}
                      <Td>{school.school_name}</Td>
                      
                    </Tr>
                    <Tr>
                      {/*miasto szkoly */}
                      <Td>{school.location.city}
                        <br />
                        <hr />
                        <br />
<Badge colorScheme="green">{school.classProfiles.length} kierunków ksztalcenia!</Badge>
                      </Td>
                      <Td></Td>
                    </Tr>
                    
                    <Tr>
                   
                      {
                        school.awards.length > 0 ? <><Td><StarIcon color='yellow.400' /> {school.awards[0]}</Td></> : ''
                      }
                    </Tr>
                    
                    <Link to={`/schoolPreview?id=${school._id}`}>
                      <Button>Czytaj więcej</Button>
                    </Link>
                 
                  
                  </>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      {schools.length <= 0 && (
        <Box>
          <Text>Ups! Nie znaleziono żadnej szkoły która pasuje do kryteriów wyszukiwania.</Text>
        </Box>
      )}
    </>
  )

}