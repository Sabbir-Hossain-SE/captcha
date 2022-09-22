import styled from "styled-components";
import { VIDEO_SCREEN_HEIGHT, VIDEO_SCREEN_WIDTH } from "../../utils/screen-const";

export const ScreenContainer = styled.div`
    padding: 70px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    background-color: #fff;
`;

export const ScreenTitle = styled.h3`
    color: #1a73e8;
    font-size: 20px;
`;

export const ScreenVideo = styled.video``;

export const VideoWrapper = styled.div`
    display: inline-block;
    height: ${VIDEO_SCREEN_HEIGHT}px;
    width: ${VIDEO_SCREEN_WIDTH}px;
    position: relative;
`;

export const ScreenButton = styled.button`
    color: #fff;
    background-color: #de9b0c;
    width: 18rem;
    height: 4.2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* font-weight: normal; */
    font-size: 1.6rem;
    line-height: 2.5rem;
    text-transform: capitalize;
    outline: none;
    border: unset;
`;

export const StatusBox = styled.div`
    height: 493px;
    width: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MessageSuccess = styled.p`
    color: limegreen;
    font-size: 20px;
`;

export const MessageFailed = styled.p`
    color: pink;
    font-size: 20px;
`;
