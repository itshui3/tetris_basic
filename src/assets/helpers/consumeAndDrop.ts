
import produce from 'immer';
import { CELL } from '../../constants/CELL';

/* CELL:
    EMPTY,
    STATIC,
    ACTIVE,
    MARK
*/

export const consumeAndDrop = (STATEboard: number[][]) => {
    let markedRows: number[] = [];
    // [0] check for marked rows
    for (let i = STATEboard.length-1; i > -1; i--) {
        if (STATEboard[i][0] === CELL.MARK) {
            markedRows.push(i);
        }
    }

    // [1] drop rows
    return produce(STATEboard, draftBoard => {

        for (let i = 0; i < markedRows.length; i++) {
            // for each marked row cleared, the next one becomes 1 row up
            let curMarked = markedRows[i] + i;
    
            for (let l = curMarked-1; l > -1; l--) {
                draftBoard[l+1] = STATEboard[l].map(item => item);
            }
        }

    })

}