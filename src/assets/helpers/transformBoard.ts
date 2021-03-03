
import produce from 'immer';

import { Piece } from '../pieces/index'
import { CELL } from '../../constants/CELL'
import { boardBuilder } from '../components/board';
import { buildAttachables } from './buildAttachables';

/*
    EMPTY   -0
    STATIC  -1
    ACTIVE  -2
*/

export const transformBoard = (Pc: Piece, board: number[][]) => {
    const transformDeezBlocks = buildAttachables(Pc);
    console.log('transformDeez', transformDeezBlocks);
    const transformedBoard = produce(board, draft => {
        transformDeezBlocks.forEach(([blockY, blockX]) => {
            draft[blockY][blockX] = CELL.STATIC
        })
    })
    
    return transformedBoard;
}