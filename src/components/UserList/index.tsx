import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isFriend?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isFriend }) => {
    return(
        <User>
            <Avatar className={isFriend ? 'friend' : ''}/>

            <strong>{nickname}</strong>

            {isFriend && <span>Friend</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname = "Luiz Ricardo" />
            
            <Role>Offline - 15</Role>
            <UserRow nickname = "Artur Fernandes" isFriend/>
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
            <UserRow nickname = "Fulano de Tal" />
        </Container>
    )
}

export default UserList