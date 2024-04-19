import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Contacts_Styled'

export const Contact = () => {
    return (
        <S.ContactItem>
            <Icon width={'32'} height={'45'} viewBox={'0 0 32 45'} iconId={'map'}/>
            <FlexWrapper direction={'column'}>
                <S.ContactTitle>Office Address</S.ContactTitle>
                <S.ContactLink>98, Arca St, PR City, 33414 , Indonesia</S.ContactLink>
            </FlexWrapper>
        </S.ContactItem>
    );
};


