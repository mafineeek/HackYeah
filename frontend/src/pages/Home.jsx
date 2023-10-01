import { Box, AlertIcon, AlertTitle, useColorMode, Text } from "@chakra-ui/react"
import { HomeHero } from "../components/HomeHero"
import { BrowserFeatures } from "../components/BrowserFeatures"
import { PageNavigator } from "../components/PageNavigator"
import { MainPageStepper } from "../components/MainPageStepper"
import {Footer} from "../components/Footer"

export const Home = () => {
    return (
        <>
            <PageNavigator />
            <HomeHero />
            <BrowserFeatures />
            <Text marginTop={'5'} marginBottom={'5'} as={'h1'} textAlign={'center'} fontWeight={'bold'}>
                Krok po kroku
            </Text>
            <MainPageStepper />
            <Footer/>
        </>
    )
}