import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    @media ${theme.media.tablet}{
        display: none;
    }
`
const ListItem = styled.li`
`
const Link = styled.a`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    color: ${theme.colors.font};
`