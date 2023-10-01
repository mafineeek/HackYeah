import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { Card, Stack, Heading, Divider, Spacer, Flex, Switch, useColorMode, IconButton, ButtonGroup, Button, Text, Image, CardHeader, CardBody, CardFooter, Box, Center } from '@chakra-ui/react'
import { QuizStepper } from "./QuizStepper"

const questions = [
	{
        Text: "Często zastanawiam się nad sensem życia?",
        Answers: ["Tak", "Nie"],
        letters: ["I", "E"]
    },
	{
        Text: "Bardziej przemawiają do mnie:",
        Answers: ["Sprawdzone wypróbowane rozwiązanie", "Twórcze, nowatorskie pomysły"],
        letters: ["S", "N"]

    },
	{
        Text: "Lubię pracę",
        Answers: ["Zespołową", "Indywidualną"],
        letters: ["E","I"]
    },
	{
        Text: "Częsciej...  ",
        Answers: ["korzystam z rad innych ludzi", "sam doradzam innym"],
        letters: ["P", "J"]
    },
	{
        Text: "Najlepiej odpoczywam",
        Answers: ["samotnie lub w małym gronie w cichym spokojnym miejscu", "wśród wielu ludzi, w miejscu, w którym zawsze coś się dzieje"],
        letters: ["I", "E"]
    },
	{
        Text: "Często zdaża się, że wykonuję pracę przed terminem lub robię wiecej, niż trzeba",
        Answers: ["Tak","Nie"],
        letters: ["J","P"]
    },
	{
        Text: "Bardziej pasuje do mnie następujący opis",
        Answers: ["Lubię mieć zaplanowany dzień i nie przepadam za nagłymi niespodziewanymi zmianami planów", "Nie lubię sztywno planować dnia, a nagłe zmiany traktuję jako urozmaicenie"],
        letters: ["J", "P"]
    },
	]
export const QuizBody = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [letters, setLetters] = React.useState([]);

    const nextQuestion = (letter) => {
        setLetters([...letters, letter]);
        currentQuestion === questions.length - 1 ? setCurrentQuestion(0) : setCurrentQuestion(currentQuestion + 1);
    }

    return (
        <>

            <Box display='flex' justifyContent='center' width='100%' overflowX='hidden' margin="0px" padding="0px">
                <Card position='relative' translateX='-100%' width="100vw">
                    <CardBody>
                        <Stack mt='6' spacing='3'> 
                            <Heading size='md' color="red.400">Pytanie #{currentQuestion+1}</Heading>
                            <Text>
                                {questions[currentQuestion].Text}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter justifyContent="center">
                           <Stack direction="column" spacing="10px">
                           <Button padding="20px" onClick={() => nextQuestion(questions[currentQuestion].letters[0])} _hover={{
                            boxShadow: '0px 0px 10px 1px rgba(125, 125, 125, 1)',
                            transform: 'scale(1.1)',
                            transition: '0.5s'
                           }}>{questions[currentQuestion].Answers[0]}</Button>
                            
                            <Button padding={'20px'}  onClick={() => nextQuestion(questions[currentQuestion].letters[1])}_hover={{
                            boxShadow: '0px 0px 10px 1px rgba(125, 125, 125, 1)',
                            transform: 'scale(1.1)',
                            transition: '0.5s'
                           }}>{questions[currentQuestion].Answers[1]}</Button>
                           </Stack>
                    </CardFooter>
                </Card>
            </Box>
                <Text as={'h1'} marginTop={20} fontWeight={'bold'}>Jak to działa? 🤔</Text>
                <Box marginTop={10}>
                <QuizStepper />
                </Box>
        </>
    );




}
