import React from "react"
import axios from "axios";
import { SchoolListBody } from "../components/SchoolListBody"
import { PageNavigator } from "../components/PageNavigator"
import {Box} from "@chakra-ui/react";
export const SchoolList = () => {
    return (
        <Box minHeight="100vh">
            <PageNavigator />
            <Box justifyContent='center' display='flex'> 
                <SchoolListBody />
            </Box>
        </Box>
    )
}