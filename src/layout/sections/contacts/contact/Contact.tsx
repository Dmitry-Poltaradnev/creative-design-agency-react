import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Contacts_Styled'

type ContactPropsType = {
    iconId: string,
    title: string,
    subTitle: string,
    width: string,
    height: string,
    viewBox: string,
}

export const Contact = (props: ContactPropsType) => {

    return (
        <S.ContactItem>
            <Icon width={props.width} height={props.height} viewBox={props.viewBox} iconId={props.iconId}/>
            <FlexWrapper direction={'column'}>
                <S.ContactTitle>{props.title}</S.ContactTitle>
                <S.ContactLink>{props.subTitle}</S.ContactLink>
            </FlexWrapper>
        </S.ContactItem>
    );
};


