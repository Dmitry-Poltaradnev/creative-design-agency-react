import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slyder_Styled'
import sliderImgFirst from "../../assets/img/firstImage.webp";
import sliderImgSecond from "../../assets/img/secondImage.webp";
import sliderImgThird from "../../assets/img/thirdImage.webp";
import '../../styles/slider.css'

type SlidePropsType = {
    imageLink: string
}

const SLide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Photo src={props.imageLink} alt={'sliderImg'}/>
        </S.Slide>
    )
}

const items = [
    <SLide imageLink={sliderImgFirst}/>,
    <SLide imageLink={sliderImgSecond}/>,
    <SLide imageLink={sliderImgThird}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);