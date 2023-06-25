import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const Container = styled(View)`
    width: 160px;
    height: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
` 

export const Icon = styled(Image)`
    width: 28px;
    height: 28px;
`

export const TitleContainer = styled(View)`
    display: flex;
    margin-left: 9px;
`

export const Title = styled(Text)`
    color: #2E3532;
    font-size: 15px;
    font-family: 'Poppins-light';
    line-height: 20px;
`

export const Subtitle = styled(Text)`
    color: #2E3532;
    font-size: 16px;
    font-family: 'Poppins-medium';
`


