import * as React from 'react';
import { ContainerHeader, Content, LogoImage, Title } from './styles';

import Logo from '../../assets/icons/unsplash.png'

const Header = () => {
    return (
        <>
            <ContainerHeader>
                <Content>
                    <LogoImage source={Logo}/>
                    <Title>UnsPick</Title>
                </Content>
            </ContainerHeader>
        </>
    )
}

export default Header