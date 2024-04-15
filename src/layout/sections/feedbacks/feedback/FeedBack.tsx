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
            <FlexWrapper gap={'20px'} align={'center'}>
                <Photo src={personPhoto} alt='personImg'/>
                <FlexWrapper direction={'column'} >
                    <p>Carol Chaves:</p>
                    <LinkMail>@caroles.gmail.com</LinkMail>
                </FlexWrapper>
                <Icon iconId={'quotes'} />
            </FlexWrapper>
        </FeedBackWrapper>
    );
};

const FeedBackWrapper = styled.div`
    max-width: 500px;
    background: linear-gradient(178.44deg, rgba(17, 24, 42, 0.7) 19.668%, rgba(17, 24, 42, 0) 121.51%);
    border-radius: 40px;
    padding: 15px;
    margin: 80px 0;
`
const  FeedBackInfo = styled.p`
margin-bottom: 50px;
`
const LinkMail = styled.a`
    color: ${theme.colors.accent};
`

const Photo = styled.img`
    width: 100px;
    height: 100px;
`
