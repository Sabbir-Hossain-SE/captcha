/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
import { useCallback, useEffect, useRef, useState } from "react";
import { ValidationScreenProps } from "../../@type/common";
import getSpecificDuplicateElementCount from "../../utils/getSpecificDuplicateElementCount";
import {
    SHAPE_CIRCLE,
    SHAPE_SQUARE,
    SHAPE_TRIANGLE,
    VIDEO_SCREEN_HEIGHT,
    VIDEO_SCREEN_WIDTH
} from "../../utils/screen-const";
import CaptchaGrid from "../CapchaGrid/CaptchaGrid";
import {
    MessageFailed,
    MessageSuccess,
    ScreenButton,
    ScreenContainer,
    ScreenTitle,
    StatusBox,
    VideoWrapper
} from "./ScreenStyle";

const ValidationScreen: React.FC<ValidationScreenProps> = (props) => {
    const { video, position } = props;
    const photoRef = useRef<HTMLCanvasElement>(null);
    const [selectedItems, setSelectedItems] = useState<object | any>({});
    const [captchaItems, setCaptchaItems] = useState(new Array(16).fill(0));
    const [isPassed, setIsPassed] = useState(false);
    const [isValidateBtnClicked, setIsValidateBtnClicked] = useState(false);
    const [pivotShape, setPivotShape] = useState(Math.floor(Math.random() * (4 - 1)) + 1);

    const createImage = useCallback(() => {
        if (photoRef.current !== null && video !== null && video != undefined) {
            const photo = photoRef.current;
            photo.width = VIDEO_SCREEN_WIDTH;
            photo.height = VIDEO_SCREEN_HEIGHT;
            const ctx = photo.getContext("2d");
            ctx?.drawImage(video, 0, 0, VIDEO_SCREEN_WIDTH, VIDEO_SCREEN_HEIGHT);
            // setHasPhoto(true);
        }
    }, [video]);

    useEffect(() => {
        createImage();
    }, [video, createImage]);

    const checkPassOrFailToResolveCaptcha = (): boolean => {
        let numberOfOccurance = 0;
        if (
            getSpecificDuplicateElementCount(captchaItems, pivotShape) <
            Object.keys(selectedItems).length
        ) {
            return false;
        }
        for (let index = 0; index < captchaItems.length; index++) {
            const item = captchaItems[index];

            if (item === pivotShape) {
                if (selectedItems[index] === item) {
                    numberOfOccurance += 1;
                } else {
                    return false;
                }
            }
        }

        return true;
    };

    const handleButtonClick = () => {
        setIsValidateBtnClicked(true);

        if (checkPassOrFailToResolveCaptcha()) {
            setIsPassed(true);
        }
    };

    return (
        <ScreenContainer>
            {!isValidateBtnClicked ? (
                <>
                    <ScreenTitle>
                        Select{" "}
                        {(pivotShape == SHAPE_CIRCLE && "Circle") ||
                            (pivotShape == SHAPE_SQUARE && "Square") ||
                            (pivotShape == SHAPE_TRIANGLE && "Triangle")}
                    </ScreenTitle>
                    <VideoWrapper>
                        <canvas ref={photoRef} className="photo_container" />
                        <CaptchaGrid
                            position={position}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            captchaItems={captchaItems}
                            setCaptchaItems={setCaptchaItems}
                        />
                    </VideoWrapper>

                    <ScreenButton onClick={handleButtonClick}>Validate</ScreenButton>
                </>
            ) : (
                <StatusBox>
                    {isPassed ? (
                        <MessageSuccess>You Are Passed to Resolve Puzzle.</MessageSuccess>
                    ) : (
                        <MessageFailed>You Are Failed to Resolve Puzzle</MessageFailed>
                    )}
                </StatusBox>
            )}
        </ScreenContainer>
    );
};

export default ValidationScreen;
