
import styles from "../components/TicTacToe.module.css";
import { useState } from "react";

export default function Page05() {

    return (
        <>
            <h1>Tic Tac Toe</h1>


            <div className={styles.TicTacToe}>

                <Board />

            </div>
        </>
    )
}


function Board() {

    const [moves, setMoves] = useState(Array(9).fill(null));
    const moveCount = countMoves(moves);
    const isX = moveCount % 2 === 0;

    //checkWinner( moves ); //false, "X", "O"
    
    function handleMove(id) {

        if (moves[id]) return; //oynanmış bir taşın tekrar oynamasını engelle

        const newMoves = [...moves];
        newMoves[id] = isX ? "X" : "O";

        setMoves(newMoves);
    }

    return (
        <div className={styles.Board}>
            {/*  emmet abbreviation (div>{ item $}) * 9 */}
            {moves.map((m, i) => <Square content={m} id={i} onMove={handleMove} />)}
        </div>
    )
}

function Square({ content, id, onMove }) {

    return (
        <div onClick={() => { onMove(id) }}>{content}</div>
    )

}


// 0,1,2 
//3,4,5 
//6,7,8

//0, 3, 6
//1,4,7
//2,5,8

//0,4,8
//2, 4, 6


//[ null, null, null, null, null, null, null, null, null];

//[ null,  "X", null, null, null, null, null, null, null];

//[ null,  "X", null, "O", null, null, null, null, null];

//[ "X",  "X", null, "O", null, null, null, null, null];

//[ "X",  "X", "X", "O", null, null, null, null, null];


//[ null, null, null, null, null, null, null, null, null]
//[ "x", null, "0", null, null, null, null, null, null]

function countMoves(arr) {
    let counter = 0;
    arr.forEach(el => {
        if (el) {
            counter += 1;
        }
    });

    return counter;
}