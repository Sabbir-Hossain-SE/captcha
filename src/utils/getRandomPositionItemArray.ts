import { SHAPE_CIRCLE, SHAPE_SQUARE, SHAPE_TRIANGLE } from "./screen-const";

const generateRandom = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandomPositionItemArray = (captchaItem: number[]): number[] => {
    const totalLen = captchaItem.length;
    const itemLength = Math.floor(totalLen / 2);
    const limit = Math.floor(itemLength / 3);
    const fraction = Math.ceil((itemLength / 3 - limit) * 3);
    const shapeLimit: number[] = new Array(3).fill(limit);
    let i = 0;
    while (i < fraction) {
        const shapeType = generateRandom(0, 3);
        const extendLimit = shapeLimit[shapeType] + 1;
        shapeLimit[shapeType] = extendLimit;
        i += 1;
    }
    let j = 0;
    const circleLimit = shapeLimit[0];
    const squareLimit = shapeLimit[1];
    const triangleLimit = shapeLimit[2];
    let circleCount = 0;
    let squareCount = 0;
    let triangleCount = 0;
    const positionedArray = new Array(totalLen).fill(0);
    while (1) {
        const position = generateRandom(0, totalLen);
        const shapeType = generateRandom(1, 4);
        if (positionedArray[position] === 0) {
            if (circleCount < circleLimit && shapeType === SHAPE_CIRCLE) {
                positionedArray[position] = SHAPE_CIRCLE;
                circleCount += 1;
                j += 1;
            } else if (squareCount < squareLimit && shapeType === SHAPE_SQUARE) {
                positionedArray[position] = SHAPE_SQUARE;
                squareCount += 1;
                j += 1;
            } else if (triangleCount < triangleLimit && shapeType === SHAPE_TRIANGLE) {
                positionedArray[position] = SHAPE_TRIANGLE;
                triangleCount += 1;
                j += 1;
            }
        }

        if (j === itemLength) {
            break;
        }
    }
    return positionedArray;
};
export default getRandomPositionItemArray;
