import React from 'react'

import { Container, Avatar, Message, Header, Content } from './styles'

export { Mention } from './styles'

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isFriend?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isFriend
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isFriend ? 'friend' : ''}/>

            <Message>
                <Header>
                <strong>{author}</strong>

                {isFriend && <span>Friend</span>}

    <time>{date}</time>
                </Header>

                <Content>
                    {content}
                </Content>
            </Message>
        </Container>
    )
}

export default ChannelMessage