
import produce from 'immer';

import { Piece } from '../pieces/index'
import { CELL } from '../../constants/CELL'
import { boardBuilder } from '../components/board';
import { buildAttachables } from './buildAttachables';

/*
    EMPTY   -0
    STATIC  -1
    ACTIVE  -2
    MARK    -3
*/

export const transformSTATEBoard = (Pc: Piece, board: number[][]) => {
    const transformDeezBlocks = buildAttachables(Pc);

    const transformedBoard = produce(board, draft => {
        transformDeezBlocks.forEach(([blockY, blockX]) => {
            draft[blockY][blockX] = CELL.STATIC
        })
    })
    
    return transformedBoard;
}