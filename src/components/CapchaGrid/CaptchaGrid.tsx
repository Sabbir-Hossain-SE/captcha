/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { CaptchaGridProps } from "../../@type/common";
import getRandomPositionItemArray from "../../utils/getRandomPositionItemArray";
import { SHAPE_CIRCLE, SHAPE_SQUARE, SHAPE_TRIANGLE } from "../../utils/screen-const";
import { GridContainer, GridItem } from "./CaptchaGridStyle";

const CaptchaGrid: React.FC<CaptchaGridProps> = (props) => {
    const { position, selectedItems, setSelectedItems, captchaItems, setCaptchaItems } = props;

    useEffect(() => {
        const positionedItems = getRandomPositionItemArray(captchaItems);
        setCaptchaItems(positionedItems);
    }, []);

    const handleClickedOnItem = (item: number, index: number) => {
        let data = { ...selectedItems };
        data = { ...data, [index]: item };
        setSelectedItems(data);
    };

    return (
        <GridContainer
            style={{
                top: `${position?.y ?? 0}px`,
                left: `${position?.x ?? 0}px`
            }}
        >
            {captchaItems.map((item, index) => (
                <GridItem key={item.toString() + index.toString()}>
                    {item === SHAPE_CIRCLE && (
                        <FaCircle
                            onClick={() => handleClickedOnItem(item, index)}
                            size={25}
                            color={
                                selectedItems[index]
                                    ? "rgba(222, 155, 12, 0.8)"
                                    : "rgba(255,255,255,0.5)"
                            }
                        />
                    )}
                    {item === SHAPE_SQUARE && (
                        <FaSquareFull
                            onClick={() => handleClickedOnItem(item, index)}
                            size={24}
                            color={
                                selectedItems[index]
                                    ? "rgba(222, 155, 12, 0.8)"
                                    : "rgba(255,255,255,0.5)"
                            }
                        />
                    )}

                    {item === SHAPE_TRIANGLE && (
                        <IoTriangle
                            onClick={() => handleClickedOnItem(item, index)}
                            size={25}
                            color={
                                selectedItems[index]
                                    ? "rgba(222, 155, 12, 0.8)"
                                    : "rgba(255,255,255,0.5)"
                            }
                        />
                    )}
                </GridItem>
            ))}
        </GridContainer>
    );
};

export default CaptchaGrid;
