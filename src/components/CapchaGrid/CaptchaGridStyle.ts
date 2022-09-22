import styled from "styled-components";
import { SquareShape } from "../Square/SquareStyle";

export const GridContainer = styled(SquareShape)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

export const GridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            transform: scale(1.1);
            fill: rgba(222, 155, 12, 0.6);
        }
    }
`;
