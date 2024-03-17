const getInitialBoardState = (rows, cols) => {
    const boardState = {};

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            boardState[`${i}_${j}`] = "";
        }
    }
    return boardState;
}

export {
    getInitialBoardState
}