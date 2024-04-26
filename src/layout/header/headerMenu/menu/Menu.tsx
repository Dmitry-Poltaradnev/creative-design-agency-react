import React from 'react';
import {S} from '../HeaderMenu_Styles'

interface MenuItem {
    title: string;
    href: string;
}

export const Menu = (props: { menuItems: MenuItem[] } , menuIsOpen:any, ) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.NavLink isOpen={menuIsOpen} spy={true} smooth={true} to={item.href}>{item.title}</S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};

