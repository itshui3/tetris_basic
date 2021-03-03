

export const cleanPrevActives = (board: HTMLDivElement) => {
    const rowList = Array.from(board.childNodes);

    rowList.forEach((row) => {
        const cellList = Array.from(row.childNodes) as HTMLDivElement[];

        cellList.forEach((cell) => {
            if (cell.className === 'cell active') cell.className = 'cell empty';
        })
    })

    return board;
}