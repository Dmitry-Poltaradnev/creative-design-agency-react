import React from 'react';
import styled from "styled-components";
import {LogoLink} from "../../components/LogoLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";


const items = ['Home', 'About Us', 'Services', 'Portfolio', 'Pages', 'Contact Us']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <HeaderLogoWrapper>
                        <LogoLink/>
                    </HeaderLogoWrapper>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(270.00deg, rgb(16, 16, 16) 8.854%, rgba(16, 16, 16, 0) 50%);
    padding: 20px 0;
`
const HeaderLogoWrapper = styled.div`
    @media ${theme.media.tablet} {
        display: none;
    }
`