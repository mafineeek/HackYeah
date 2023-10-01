import { Modal, ModalBody, ModalContent, ModalHeader } from "@chakra-ui/react"

export const QuizResult = () => {
    return (
        <>
            <Modal>
                <ModalBody>
                <ModalHeader>
                    Mamy to! 🎉
                </ModalHeader>
                    <ModalContent>
                        Przeanalizowaliśmy twoje odpowiedzi w tescie!

                        
                    </ModalContent>
                </ModalBody>
            </Modal>
        </>
    )
}