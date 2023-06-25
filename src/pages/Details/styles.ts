import styled from 'styled-components'

import { View, Text, Image } from 'react-native'
import { Avatar } from 'react-native-paper'

export const Container = styled(View)`
    margin: 24px 26px;
`

export const UserCard = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const AvatarImage = styled(Avatar.Image)`
`

export const UsernameSession = styled(View)`
    margin-left: 9px;
`

export const UsernameText = styled(Text)`
    color: #2E3532;
    font-size: 16px;
    font-family: 'Poppins-bold';
    font-weight: 700;
`

export const LocationText = styled(Text)`
    color: #2E3532;
    font-size: 12px;
    font-family: 'Poppins-regular';
    font-weight: 500;
`

export const ImageFocused = styled(Image)`
    height: 204px;
`

export const ContainerCardDetails = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 21px
`


