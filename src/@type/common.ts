/* eslint-disable @typescript-eslint/ban-types */
export type Area = { x1: number; x2: number; y1: number; y2: number };
export type Position = { x: number; y: number };
export type CombinationRectangleProps = {
    area: Area;
    setPosition: (value: Position) => void;
    position: Position;
};

export type SquareProps = {
    area: Area;
    setPosition: (value: Position) => void;
    position: Position;
};

export type SelfieScreenProps = {
    setIsCaptured: (value: boolean) => void;
    setVideo: (value: HTMLVideoElement) => void;
    setPosition: (value: Position) => void;
    position: Position;
};

export type ValidationScreenProps = {
    video: HTMLVideoElement;
    position: Position;
    setPosition: (value: Position) => void;
};

export type CaptchaGridProps = {
    position: Position;
    selectedItems: {} | any;
    setSelectedItems: (value: object) => void;
    captchaItems: number[];
    setCaptchaItems: (value: number[]) => void;
};
