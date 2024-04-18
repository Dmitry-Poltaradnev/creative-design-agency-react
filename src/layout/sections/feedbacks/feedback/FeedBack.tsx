import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import personPhoto from '../../../../assets/img/testimonialsPerson.png'
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

export const FeedBack = () => {
    return (
        <FeedBackWrapper>
            <FeedBackInfo>
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
            </FeedBackInfo>
            <FeedBackFlexWrapper>
                <Photo src={personPhoto} alt='personImg'/>
                <FlexWrapper direction={'column'} >
                    <p>Carol Chaves:</p>
                    <LinkMail>@caroles.gmail.com</LinkMail>
                </FlexWrapper>
                <Icon iconId={'quotes'} />
            </FeedBackFlexWrapper>
        </FeedBackWrapper>
    );
};

const FeedBackWrapper = styled.div`
    max-width: 500px;
    background: linear-gradient(178.44deg, rgba(17, 24, 42, 0.7) 19.668%, rgba(17, 24, 42, 0) 121.51%);
    border-radius: 40px;
    padding: 15px;
    margin: 80px 0;
    width: 90%;
    @media ${theme.media.mobile} {
        margin: 30px 0;
    }
`
const FeedBackFlexWrapper = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 30px;
    }
`
const  FeedBackInfo = styled.p`
margin-bottom: 50px;
`
const LinkMail = styled.a`
    color: ${theme.colors.accent};
`

const Photo = styled.img`
    max-width: 100px;
    max-height: 100px;
`
