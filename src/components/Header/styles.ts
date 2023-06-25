import styled from 'styled-components'
import { Appbar } from 'react-native-paper'
import { View, Image, Text } from 'react-native'

export const ContainerHeader = styled(Appbar.Header)`
    background-color: #2E3532;
`

export const Content = styled(View)`
    display: flex;
    flex-direction: row;
    margin-left: 27px;
`

export const LogoImage = styled(Image)`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`

export const Title = styled(Text)`
    font-family: 'Poppins-bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: white
`

