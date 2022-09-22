import { useState } from "react";
import { Position } from "../../@type/common";
import SelfieScreen from "../Screens/SelfieScreen";
import ValidationScreen from "../Screens/ValidationScreen";
import CaptchaContainer from "./captcha";

const Captcha = () => {
    const [isCaptured, setIsCaptured] = useState(false);
    const [video, setVideo] = useState<HTMLVideoElement>();
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    return (
        <CaptchaContainer>
            {!isCaptured ? (
                <SelfieScreen
                    setIsCaptured={setIsCaptured}
                    setVideo={setVideo}
                    position={position}
                    setPosition={setPosition}
                />
            ) : (
                video && (
                    <ValidationScreen video={video} position={position} setPosition={setPosition} />
                )
            )}
        </CaptchaContainer>
    );
};

export default Captcha;
