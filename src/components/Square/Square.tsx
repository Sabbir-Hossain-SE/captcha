/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { SquareProps } from "../../@type/common";
import { RECTANGLE_HEIGHT, RECTANGLE_WIDTH } from "../../utils/screen-const";
import { SquareShape } from "./SquareStyle";

const Square: React.FC<SquareProps> = (props) => {
    const { area, position, setPosition } = props;

    const generateRandom = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min)) + min;

    const getSquareDynamicPosition = () => {
        const { x1, x2, y1, y2 } = area;
        const reducedWidth = x2 - RECTANGLE_WIDTH;
        const reducedHeight = y2 - RECTANGLE_HEIGHT;
        const x = generateRandom(x1, reducedWidth);
        const y = generateRandom(y1, reducedHeight);
        setPosition({ x, y });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getSquareDynamicPosition();
        }, 300);
        return () => clearInterval(interval);
    }, [position]);

    return (
        <SquareShape
            style={{
                top: `${position?.y ?? 0}px`,
                left: `${position?.x ?? 0}px`
            }}
        />
    );
};

export default Square;
