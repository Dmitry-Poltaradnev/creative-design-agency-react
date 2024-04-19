import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../Experience_Styled'


export const ExperienceReceived = () => {
    return (
        <S.ExperienceReceived>
            <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={'tick'}/>
            <S.ExperienceTitle>Happy Customer</S.ExperienceTitle>
        </S.ExperienceReceived>
    );
};


