import React, {useRef, useEffect} from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if(div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                    author="Luiz Ricardo"
                    date="09/07/2020"
                    content="Primeiro projeto com ReactJS finalizado 🚀"
                />
                ))}

                <ChannelMessage
                    author="Artur Fernandes"
                    date="09/07/2020"
                    content={
                        <>
                            <Mention>@Luiz Ricardo</Mention> , primeiro de muitos...
                        </>
                    }
                    hasMention
                    isFriend
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData