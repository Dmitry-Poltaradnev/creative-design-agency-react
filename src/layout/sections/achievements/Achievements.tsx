import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Achievement} from "./achievement/Achievement";
import {Container} from "../../../components/Container";
import {S} from './Achievment_Styles'

const AchievemenData = [
    {
        iconId: 'achievements1',
        viewBox: '0 0 90 110',
        width: '105',
        height: '110',
        counter: '50+',
        title: 'Team members'
    }, {
        iconId: 'achievements2',
        viewBox: '0 0 90 110',
        width: '105',
        height: '110',
        counter: '200+',
        title: 'Project done'
    }, {
        iconId: 'achievements1',
        viewBox: '0 0 90 110',
        width: '105',
        height: '110',
        counter: '500+',
        title: 'Happy customers'
    }, {
        iconId: 'achievements4',
        viewBox: '0 0 90 110',
        width: '105',
        height: '110',
        counter: '75+',
        title: 'Award Winning '
    },

]
export const Achievements = () => {
    return (
        <S.Achievements>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}
                             wrap={'wrap'} gap={'30px'}>
                    {AchievemenData.map((item, index) => {
                        return <Achievement iconId={item.iconId} title={item.title} counter={item.counter}
                                            viewBox={item.viewBox}
                                            height={item.height} width={item.width}
                                            key={index}
                        />

                    })}

                </FlexWrapper>
            </Container>
        </S.Achievements>
    );
};
