import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Services_Styled'

type ServicePropsType = {
    iconId: string,
    title: string,
    info: string,
    width: string,
    height: string,
    viewBox: string,
}

export const Service = (props: ServicePropsType) => {
    return (
        <S.Service>
            <Icon iconId={props.iconId} viewBox={props.viewBox} width={props.width} height={props.height}/>
            <S.ServiceTitle>{props.title}</S.ServiceTitle>
            <S.ServiceInfo>{props.info}</S.ServiceInfo>
        </S.Service>
    );
};

