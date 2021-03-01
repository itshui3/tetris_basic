

import { Piece } from './index'
export const attacher = (board: HTMLDivElement, pc: Piece) => {

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

    attachDeezBlocks.forEach(([curBlockY, curBlockX]) => {
        const activeDOMBlock = board.childNodes[curBlockY].childNodes[curBlockX] as HTMLDivElement;

        activeDOMBlock.className = 'cell active'
    })

    return board;
}

export const buildAttachables = (pc: Piece) => {
    const attachables = [pc.pivot]

    const curFormPcs = pc.forms[pc.form].map(([offsetY, offsetX]) => {
        return [pc.pivot[0] + offsetY, pc.pivot[1] + offsetX]
    })

    return [...attachables, ...curFormPcs]
}