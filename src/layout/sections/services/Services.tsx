import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Service} from "./service/Service";

export const Services = () => {
    return (
        <StyledServices>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <BlockTitle>our services</BlockTitle>
                    <BlockSubTitle>Experience the power of <span>innovation</span>.</BlockSubTitle>
                    <span>We love Creating</span>
                    <BlockInfo>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro
                        elit NeDque porro Lorem ipsum Neque porro Neque porro
                        Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem ipsum Neque quis
                        ipsum </BlockInfo>
                    <LinkBtn>VIEW ALL</LinkBtn>
                </div>
                <FlexWrapper>
                     <Service/>
                     <Service/>
                     <Service/>
                     <Service/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.div`
`