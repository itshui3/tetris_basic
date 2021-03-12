
import produce from 'immer';
import { CELL } from '../../constants/CELL';

/* CELL: 
    EMPTY,
    STATIC,
    ACTIVE,
    MARK
*/

export const checklinesAndUpdate = (STATEboard: number[][]) => {

    let coloredRows: number[] = [];

    return {

        coloredSTATEboard: produce(STATEboard, draft => {

            return draft.map((row, r_idx) => {

                let color = row.reduce((prev, cur) => {
                    if (cur !== CELL.STATIC) {
                        return false;
                    } else {
                        return prev;
                    };
                }, true);

                if (color) {
                    coloredRows.push(r_idx);
                    return row.map(_ => CELL.MARK);
                } else {
                    return row;
                };
            });

        }), 

        coloredRows: coloredRows

    }

};