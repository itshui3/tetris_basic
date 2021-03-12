
import produce from 'immer';
import { CELL } from '../../constants/CELL';

/* CELL: 
    EMPTY,
    STATIC,
    ACTIVE,
    MARK
*/

export const checklinesAndUpdate = (STATEboard: number[][]) => {

    return produce(STATEboard, draft => {

        return draft.map(row => {

            let color = row.reduce((prev, cur) => {
                if (cur !== CELL.STATIC) {
                    return false;
                } else {
                    return prev;
                };
            }, true);

            if (color) {
                return row.map(_ => CELL.MARK);
            } else {
                return row;
            };
        });

    });

};