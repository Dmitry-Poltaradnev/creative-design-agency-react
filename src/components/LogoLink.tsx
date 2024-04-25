import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {FlexWrapper} from "./FlexWrapper";
import {animateScroll as scroll} from "react-scroll";

export const LogoLink = () => {
    return (
        <Link onClick={() => scroll.scrollToTop()}>
            <FlexWrapper direction={'column'} align={'center'} ><span>Creatic</span><p>CREATIVE AGENCY</p></FlexWrapper>
        </Link>
    );
};

const Link = styled.a`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${theme.colors.font};
    letter-spacing: 2.6px;

    span {
        margin-bottom: 20px;
        font-size: 50px;
        color: ${theme.colors.accent};
        font-weight: 500;
        letter-spacing: -1px;
    }    
`

