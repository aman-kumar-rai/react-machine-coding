import { useState, useMemo } from "react";
import { getInitialBoardState } from "./utils";
import styles from "./style.module.css";

const TicTacToe = ({ size = 3 }) => {

    const [boardState, setBoardState] = useState(() => getInitialBoardState(size));
    const [nextPlayer, setNextPlayer] = useState("X");
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState("");

    const checkIsGameOver = (board, player) => {
        if (((board["0_0"] === player) && (board["0_1"] === player) && (board["0_2"] === player)) ||
            ((board["1_0"] === player) && (board["1_1"] === player) && (board["1_2"] === player)) ||
            ((board["2_0"] === player) && (board["2_1"] === player) && (board["2_2"] === player)) ||
            ((board["0_0"] === player) && (board["1_0"] === player) && (board["2_0"] === player)) ||
            ((board["0_1"] === player) && (board["1_1"] === player) && (board["2_1"] === player)) ||
            ((board["0_2"] === player) && (board["1_2"] === player) && (board["2_2"] === player)) ||
            ((board["0_0"] === player) && (board["1_1"] === player) && (board["2_2"] === player)) ||
            ((board["0_2"] === player) && (board["1_1"] === player) && (board["2_0"] === player))
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleResetBoard = () => {
        setBoardState(getInitialBoardState(size));
        setNextPlayer("X");
        setWinner("");
        setIsGameOver(false);
    }

    const handleClickCol = (event) => {
        const id = event.target.getAttribute("data-id");

        const _boardState = {
            ...boardState,
            [id]: nextPlayer
        }
        const _isGameOver = checkIsGameOver(_boardState, nextPlayer);

        if (_isGameOver) {
            setWinner(nextPlayer);
            setIsGameOver(true);
        }
        else {
            setNextPlayer((prevNextPlayer) => prevNextPlayer === "X" ? "O" : "X")
        }

        setBoardState(_boardState);
    }

    return (
        <div className={styles.container}>
            <p className={styles.info}>{
                isGameOver ? (
                    `Player ${winner} won`
                ) : (
                    `Player ${nextPlayer} turn`
                )
            }</p>
            <div className={styles.board}>
                {
                    new Array(size).fill(1).map((_, rowIndex) => {
                        return (
                            <div
                                key={rowIndex}
                                className={styles.row}
                            >
                                {new Array(size).fill(1).map((_, colIndex) => {
                                    return (
                                        <button
                                            key={colIndex}
                                            data-value={boardState[`${rowIndex}_${colIndex}`]}
                                            data-id={`${rowIndex}_${colIndex}`}
                                            className={styles.col}
                                            onClick={handleClickCol}
                                            disabled={boardState[`${rowIndex}_${colIndex}`] !== ""}
                                        >
                                            {boardState[`${rowIndex}_${colIndex}`]}
                                        </button>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
            <button
                className={styles.reset_btn}
                onClick={handleResetBoard}
            >
                Reset
            </button>
        </div>
    )
}

export default TicTacToe;