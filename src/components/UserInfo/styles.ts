import styled from 'styled-components';

import { Settings, Headset } from 'styled-icons/material'
import { Microphone } from 'styled-icons/boxicons-solid'



export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px; 
    background: var(--quinary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    > div {
        display: flex;
    }
` 
export const ImageProfile = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--rocketseat);
    margin-right: 8px;
` 
export const UserName = styled.h1`
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
` 
export const NumberInfo = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
` 
export const MicIcon = styled( Microphone )`
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: var(--symbol);
    margin-left: 5px;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
` 
export const PhoneIcon = styled( Headset )`
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: var(--symbol);
    margin-left: 5px;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
` 
export const SettingsIcon = styled( Settings )`
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: var(--symbol);
    margin-left: 5px;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
` 