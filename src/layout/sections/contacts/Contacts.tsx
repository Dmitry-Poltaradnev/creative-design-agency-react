import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {BlockSubTitle} from "../../../components/blockContent/BlockSubTitle";
import {BlockInfo} from "../../../components/blockContent/BlockInfo";
import {Contact} from "./contact/Contact";

export const Contacts = () => {
    return (
        <FlexWrapper justify={'space-around'}>
            <div>
                <BlockSubTitle>Get in <span>TOUCH</span></BlockSubTitle>
                <BlockInfo>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
                    NeDque porro </BlockInfo>
                <FlexWrapper>
                    <Contact/>
                    <Contact/>
                    <Contact/>
                </FlexWrapper>
            </div>
            <FlexWrapper direction={'column'}>
                <input type="text"/>
                <input type="email"/>
                <textarea></textarea>
                <button>SEND MESSAGE</button>
            </FlexWrapper>
        </FlexWrapper>
    );
};

