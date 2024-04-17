import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopUp>
        </StyledMobileMenu>
    );
};

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.primaryBg};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1000;    
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        align-items: center;
    }
`

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const ListItem = styled.li`
`
const Link = styled.a`
    font-size: 35px;
    font-weight: 400;
    line-height: 32px;
    color: ${theme.colors.font};
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    right: -100px;
    top: -100px;
    z-index: 10000;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &:before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(1px) translateX(-1px);
            `}            
        }

        &:after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}            
        }
    }
`