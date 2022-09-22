const getSpecificDuplicateElementCount = (arr: number[], pivotElement: number): object | number => {
    const count: object | any = {};

    arr.forEach((element) => {
        count[element] = (count[element] || 0) + 1;
    });
    if (pivotElement) {
        return count[pivotElement];
    }

    return count;
};

export default getSpecificDuplicateElementCount;
