import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import personPhoto from '../../../../assets/img/testimonialsPerson.png'
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../FeedBacks_Styled"

export const FeedBack = () => {
    return (
        <S.FeedBackWrapper>
            <S.FeedBackInfo>
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
            </S.FeedBackInfo>
            <S.FeedBackFlexWrapper>
                <S.Photo src={personPhoto} alt='personImg'/>
                <FlexWrapper direction={'column'}>
                    <p>Carol Chaves:</p>
                    <S.LinkMail>@caroles.gmail.com</S.LinkMail>
                </FlexWrapper>
                <Icon iconId={'quotes'}/>
            </S.FeedBackFlexWrapper>
        </S.FeedBackWrapper>
    );
};


