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
import {theme} from "../../../styles/Theme";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <FlexWrapperServices>
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
                    <FlexWrapper justify={'center'} align={'center'} wrap={'wrap'} >
                        <Service/>
                        <Service/>
                        <Service/>
                        <Service/>
                    </FlexWrapper>
                </FlexWrapperServices>
            </Container>
        </StyledServices>
    );
};

const FlexWrapperServices = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.maxTablet} {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const StyledServices = styled.section`
    padding: 100px 0;
`
const AboutInfoWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 35px;
    max-width: 660px;
    @media ${theme.media.maxTablet} {
        align-items: center;
        margin-bottom: 50px;
    }

`