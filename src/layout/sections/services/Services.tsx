import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Service} from "./service/Service";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <AboutInfoWrapper>
                        <BlockTitle>our services</BlockTitle>
                        <BlockSubTitle lineHeight={'1.2'}>Experience the power
                            of <span>innovation</span>.</BlockSubTitle>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro
                            elit NeDque porro Lorem ipsum Neque porro Neque porro
                        </BlockInfo>
                        <LinkBtn>VIEW ALL</LinkBtn>
                    </AboutInfoWrapper>
                    <FlexWrapper justify={'center'} align={'center'} wrap={'wrap'}>
                        <Service/>
                        <Service/>
                        <Service/>
                        <Service/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.div`
`
const AboutInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    max-width: 660px;
    margin: 190px 0;
    position: relative;
`