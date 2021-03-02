

import { Piece } from './index'
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

export const buildAttachables = (pc: Piece) => {
    const attachables = [pc.pivot]

    const curFormPcs = pc.forms[pc.form].map(([offsetY, offsetX]) => {
        return [pc.pivot[0] + offsetY, pc.pivot[1] + offsetX]
    })

    return [...attachables, ...curFormPcs]
}

export const cleanPrevActives = (board: HTMLDivElement) => {
    const rowList = Array.from(board.childNodes);

    rowList.forEach((row) => {
        const cellList = Array.from(row.childNodes) as HTMLDivElement[];

        cellList.forEach((cell) => {
            if (cell.className === 'cell active') cell.className = 'cell';
        })
    })

    return board;
}

export const attachToBoard = (blocks: number[][], board: HTMLDivElement) => {
    blocks.forEach(([curBlockY, curBlockX]) => {
        const activeDOMBlock = board.childNodes[curBlockY].childNodes[curBlockX] as HTMLDivElement;

        activeDOMBlock.className = 'cell active'
    })

    return board;
}