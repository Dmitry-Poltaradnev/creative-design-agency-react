import React from 'react';
import styled from "styled-components";
import icons from "../../../../assets/img/icons-sprite.svg";

export const Contact = () => {
    return (
        <div>
            <svg width="50" height="50">
                <use xlinkHref={`${icons}#map`}/>
            </svg>
            <ContactTitle>Office Address</ContactTitle>
            <ContactLink>98, Arca St, PR City, 33414 , Indonesia</ContactLink>
        </div>
    );
};

const ContactTitle = styled.p`

`
const ContactLink = styled.a`
`