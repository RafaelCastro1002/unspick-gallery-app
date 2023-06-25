import styled from 'styled-components'
import { View } from 'react-native'
import { TextInput } from 'react-native'

export const SearchArea = styled(View)`
    background-color: #FFFCF9;
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled(TextInput)`
    width: 280px;
    height: 44px;
    background-color: white;
    color: #888098;
    font-family: 'Poppins-light';
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #888098;
    border-radius: 8px;
    padding: 10px 22px;
    display: flex;
    justify-content: center;
`