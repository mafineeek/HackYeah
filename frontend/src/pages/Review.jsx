import React from "react"

import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react"

export const Review = () => {
    return (
        <Alert status="error">
            <AlertIcon/>
            <AlertTitle>Review</AlertTitle>
        </Alert>
    )
}