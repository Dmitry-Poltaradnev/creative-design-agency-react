import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper gap={'30px'} align={'center'}>
                <Icon width={'32'} height={'45'} viewBox={'0 0 32 45'} iconId={'map'}/>
                <FlexWrapper direction={'column'} >
                    <ContactTitle>Office Address</ContactTitle>
                    <ContactLink>98, Arca St, PR City, 33414 , Indonesia</ContactLink>
                </FlexWrapper>
            </FlexWrapper>
        </StyledContact>
    );
};

const ContactTitle = styled.p`
    font-size: 21px;
    font-weight: 700;
    line-height: 1.6;
`
const ContactLink = styled.a`
color: ${theme.colors.accent};
`


const StyledContact = styled.div`
`