

import { Piece } from './index'
import { buildAttachables } from '../helpers/buildAttachables'
import { cleanPrevActives } from '../helpers/cleanPrevActives'
import { attachToBoard } from '../helpers/attachToBoard'

export const attacher = (board: HTMLDivElement, pc: Piece) => {

    const cleanBoard = cleanPrevActives(board);
/*
given a pc: {
    pivot: [1, 4],
    form: 0,
    forms: [
        [[-1, 0]],
        [[0, 1]],
        [[1, 0]],
        [[0, -1]]
    ]
}
*/
    
    const attachDeezBlocks = buildAttachables(pc);

    const boardWithAttached = attachToBoard(attachDeezBlocks, cleanBoard);

    return boardWithAttached;
}