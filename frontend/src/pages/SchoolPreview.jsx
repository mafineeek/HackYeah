import { PageNavigator } from "../components/PageNavigator"
import { Box } from "@chakra-ui/react"
import { SchoolPreviewBody } from "../components/SchoolPreviewBody";

export const SchoolPreview = () => {
    return (
        <Box>     
        <PageNavigator />
        <SchoolPreviewBody />
        </Box>
    )
}