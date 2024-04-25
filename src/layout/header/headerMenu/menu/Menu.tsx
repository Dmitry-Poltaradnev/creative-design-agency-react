import React from 'react';
import {S} from '../HeaderMenu_Styles'

interface MenuItem {
    title: string;
    href: string;
}

export const Menu: React.FC<{ menuItems: MenuItem[] }> = (props: { menuItems: MenuItem[] }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.NavLink spy={true} smooth={true} to={item.href}>{item.title}</S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};

