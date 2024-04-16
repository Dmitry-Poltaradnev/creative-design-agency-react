import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

export const Service = () => {
    return (
        <StyledService>
            <Icon iconId={'experience2'} viewBox={'0 0 100 100'}  width={'100'} height={'100'}/>
            <ServiceTitle>VIDEO MARKETING</ServiceTitle>
            <ServiceInfo>Lorem ipsum Neque do porro quisquam est qui do quam </ServiceInfo>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 230px;
    height: 220px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ServiceTitle = styled.h3`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1.9px;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    margin-top:10px;
`
const ServiceInfo = styled.p`
    font-size: 17px;
    font-weight: 300;
    line-height: 122.5%;
    letter-spacing: 0.9px;
    text-align: center;
`