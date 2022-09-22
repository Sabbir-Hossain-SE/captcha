import styled from "styled-components";
import { RECTANGLE_HEIGHT, RECTANGLE_WIDTH } from "../../utils/screen-const";

export const SquareShape = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #fff;
    width: ${RECTANGLE_WIDTH}px;
    height: ${RECTANGLE_HEIGHT}px;
`;
