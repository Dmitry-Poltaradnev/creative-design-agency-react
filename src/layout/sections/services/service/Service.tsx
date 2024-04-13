import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

export const Service = () => {
    return (
        <StyledService>
            <Icon iconId={'experience2'}/>
            <ServiceTitle>VIDEO MARKETING</ServiceTitle>
            <ServiceInfo>Lorem ipsum Neque do porro quisquam est qui do quam </ServiceInfo>
        </StyledService>
    );
};

const StyledService = styled.div`

`
const ServiceTitle = styled.h3`
`
const ServiceInfo = styled.p``