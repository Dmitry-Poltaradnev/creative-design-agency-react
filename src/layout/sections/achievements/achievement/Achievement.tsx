import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Achievment_Styles'

type AchievementPropsType = {
    iconId: string,
    viewBox: string,
    width: string,
    height: string,
    counter: string,
    title: string,
}
export const Achievement = (props:AchievementPropsType) => {
    return (
        <S.Achievement>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <S.AchievementCounter>{props.counter}</S.AchievementCounter>
            <S.AchievementTitle>{props.title}</S.AchievementTitle>
        </S.Achievement>
    );
};

