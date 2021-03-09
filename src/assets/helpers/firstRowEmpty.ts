
import { CELL } from '../../constants/CELL'

export const firstRowEmpty = (row: number[]) => {

    return row.reduce((prev, cur) => {

        if (cur === CELL.STATIC) return false
        else { return prev }

    }, true);

}