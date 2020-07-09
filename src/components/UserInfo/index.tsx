import React from 'react'

import { Container, ImageProfile, UserName, NumberInfo, MicIcon, PhoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
    return (
        <Container>

            <div>
            <ImageProfile />

                <div>
                <UserName>
                    Luiz Ricardo
                </UserName>

                <NumberInfo>
                    #2254
                </NumberInfo>
                </div>
            </div>

            <div>
                <MicIcon />

                <PhoneIcon />

                <SettingsIcon />
            </div>
        </Container>
    )
}

export default UserInfo