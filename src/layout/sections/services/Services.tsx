import React from 'react';
import {BlockTitle} from "../../../components/blockContent/BlockTitle";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {LinkBtn} from "../../../components/blockContent/LinkBtn";
import {Service} from "./service/Service";
import {Container} from "../../../components/Container";
import {BlockLine} from "../../../components/blockContent/BlockLine";
import {S} from './Services_Styled'

const ServiceData = [
    {
        iconId: 'experience1',
        width: '100',
        height: '100',
        viewBox: '0 0 100 100',
        title: 'VIDEO MARKETING',
        info: 'Lorem ipsum Neque do porro quisquam est qui do quam'
    },
    {
        iconId: 'experience2',
        width: '100',
        height: '100',
        viewBox: '0 0 100 100',
        title: 'Graphic Design',
        info: 'Lorem ipsum Neque do porro quisquam est qui do quam'
    },
    {
        iconId: 'experience3',
        width: '100',
        height: '100',
        viewBox: '0 0 100 100',
        title: 'ui/ux Design',
        info: 'Lorem ipsum Neque do porro quisquam est qui do quam'
    },
    {
        iconId: 'experience4',
        width: '100',
        height: '100',
        viewBox: '0 0 100 100',
        title: 'WEBSITE DESIGN',
        info: 'Lorem ipsum Neque do porro quisquam est qui do quam'
    },
]

export const Services = () => {
    return (
        <S.Services id={'services'}>
            <Container>
                <S.WrapperServices>
                    <S.AboutInfoWrapper>
                        <BlockTitle>our services</BlockTitle>
                        <BlockSubTitle lineHeight={'1.2'}>Experience the power
                            of <span>innovation</span>.</BlockSubTitle>
                        <BlockLine/>
                        <BlockInfo>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque
                            porro
                            elit NeDque porro Lorem ipsum Neque porro Neque porro
                        </BlockInfo>
                        <LinkBtn>VIEW ALL</LinkBtn>
                    </S.AboutInfoWrapper>
                    <S.ServiceList>
                        {ServiceData.map((item, index) => {
                            return <Service key={index} iconId={item.iconId} width={item.width} height={item.height}
                                            viewBox={item.viewBox} title={item.title} info={item.info}/>
                        })}

                    </S.ServiceList>
                </S.WrapperServices>
            </Container>
        </S.Services>
    );
};

