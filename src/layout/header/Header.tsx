import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {LogoLink} from "../../components/LogoLink";

export const Header = () => {
    return (
        <StyledHeader>
            <LogoLink/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(270.00deg, rgb(16, 16, 16) 8.854%, rgba(16, 16, 16, 0) 50%);
    display: flex;
    justify-content: space-between;
`
