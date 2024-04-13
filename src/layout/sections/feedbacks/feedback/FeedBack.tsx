import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {BlockInfo} from "../../../../components/blockContent/BlockInfo";
import personPhoto from '../../../../assets/img/testimonialsPerson.png'
import styled from "styled-components";
import {LinkBtn} from "../../../../components/blockContent/LinkBtn";
import icons from "../../../../assets/img/icons-sprite.svg";

export const FeedBack = () => {
    return (
        <FlexWrapper>
            <BlockInfo>
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
                <FlexWrapper>
                    <Photo src={personPhoto} alt='personImg'/>
                    <p>Carol Chaves</p>
                    <p>@caroles.gmail.com</p>
                    <svg width="55" height="55">
                        <use xlinkHref={`${icons}#quotes`}/>
                    </svg>
                </FlexWrapper>
                <LinkBtn>VIEW ALL TESTIMONIALS </LinkBtn>
            </BlockInfo>
        </FlexWrapper>
    );
};

const Photo = styled.img`
    width: 100px;
    height: 100px;
`
