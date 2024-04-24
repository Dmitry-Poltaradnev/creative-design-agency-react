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
                    <S.Link href={item.href}>{item.title}</S.Link>
                </S.ListItem>
            })}
        </ul>
    );
};

