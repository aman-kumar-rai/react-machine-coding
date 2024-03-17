const getInitialBoardState = (size) => {
    const boardState = {};

    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            boardState[`${i}_${j}`] = "";
        }
    }
    return boardState;
}

export {
    getInitialBoardState
}