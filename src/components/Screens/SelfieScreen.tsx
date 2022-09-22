/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { useLayoutEffect, useRef, useState } from "react";
import { Area, SelfieScreenProps } from "../../@type/common";
import { VIDEO_SCREEN_HEIGHT, VIDEO_SCREEN_WIDTH } from "../../utils/screen-const";
import Square from "../Square/Square";
import {
    ScreenButton,
    ScreenContainer,
    ScreenTitle,
    ScreenVideo,
    VideoWrapper
} from "./ScreenStyle";

const SelfieScreen: React.FC<SelfieScreenProps> = (props) => {
    const { setIsCaptured, setVideo, position, setPosition } = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoWrapperRef = useRef<HTMLDivElement>(null);
    const [area, setArea] = useState<Area>({ x1: 0, x2: 0, y1: 0, y2: 0 });

    const [mediaStream, setMediaStream] = useState<MediaStream>();

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: VIDEO_SCREEN_WIDTH,
                    height: VIDEO_SCREEN_HEIGHT
                }
            })
            .then((stream) => {
                setMediaStream(stream);
                if (videoRef?.current) {
                    const video = videoRef.current;
                    video.srcObject = stream;

                    const isPlaying =
                        video.currentTime > 0 &&
                        !video.paused &&
                        !video.ended &&
                        video.readyState > video.HAVE_CURRENT_DATA;

                    if (!isPlaying) {
                        setTimeout(() => {
                            video.play();
                        }, 0);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getCaptchaAreaPosition = (): void => {
        if (videoWrapperRef.current !== null) {
            // const x = Number(videoWrapperRef.current.offsetLeft);
            // const y = Number(videoWrapperRef.current.offsetTop);
            setArea({ x1: 0, x2: VIDEO_SCREEN_WIDTH, y1: 0, y2: VIDEO_SCREEN_HEIGHT });
        }
    };

    useLayoutEffect(() => {
        getVideo();
        getCaptchaAreaPosition();
    }, []);

    function stopStreamedVideo() {
        if (mediaStream) {
            mediaStream.getVideoTracks().forEach((track) => {
                track.stop();
            });
        }
    }

    const handleContinue = () => {
        const video = videoRef.current;
        if (video) {
            setVideo(video);
        }
        setIsCaptured(true);
        const lockedPosition = position;
        setTimeout(() => {
            setPosition(lockedPosition);
            stopStreamedVideo();
        }, 0);
    };

    return (
        <ScreenContainer>
            <ScreenTitle>Take Selfie</ScreenTitle>
            <VideoWrapper ref={videoWrapperRef}>
                <ScreenVideo
                    ref={videoRef}
                    height={VIDEO_SCREEN_HEIGHT}
                    width={VIDEO_SCREEN_WIDTH}
                />
                {videoRef?.current && (
                    <Square area={area} position={position} setPosition={setPosition} />
                )}
            </VideoWrapper>
            <ScreenButton onClick={handleContinue}>Continue</ScreenButton>
        </ScreenContainer>
    );
};

export default SelfieScreen;
