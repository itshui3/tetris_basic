

import { Piece } from './index'
export const attacher = (board: HTMLDivElement, pc: Piece) => {
    // console.log(board.childNodes)
    // console.log(board.childNodes[0].childNodes)
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
    console.log(attachDeezBlocks);
    
}

export const buildAttachables = (pc: Piece) => {
    const attachables = [pc.pivot]

    const curFormPcs = pc.forms[pc.form].map(([offsetY, offsetX]) => {
        return [pc.pivot[0] + offsetY, pc.pivot[1] + offsetX]
    })
    attachables.concat(curFormPcs);

    return [...attachables, ...curFormPcs]
}