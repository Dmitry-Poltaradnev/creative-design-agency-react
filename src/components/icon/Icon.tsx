import React from 'react';
import iconSprite from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "95.000000"} height={props.height || "93.000000"}
             viewBox={props.viewBox || "0 0 95 93"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    )
};

