

export const attachToBoard = (blocks: number[][], board: HTMLDivElement) => {
    blocks.forEach(([curBlockY, curBlockX]) => {
        const activeDOMBlock = board.childNodes[curBlockY].childNodes[curBlockX] as HTMLDivElement;

        activeDOMBlock.className = 'cell active'
    })

    return board;
}