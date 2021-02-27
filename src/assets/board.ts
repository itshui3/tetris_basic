
export enum CELL {
    EMPTY,
    STATIC,
    ACTIVE
}

const row: number[] = [...Array(10)].map(_ => 0)

export const INITboard: number[][] = [...Array(24)].map(() => [...row])

export const boardBuilder = (state: number[][]) => {
    // state is an object representation of what the board should look like
    // this is then used to construct a dom representation of the board 
    // as it should look in the browser

    const DOMboard = document.createElement('div');

    state.forEach((r, r_idx) => {
        const DOMrow = document.createElement('div');
        DOMrow.className = 'row'
        r.forEach((c, c_idx) => {

            const DOMcell = document.createElement('div');
            const { EMPTY, STATIC, ACTIVE } = CELL;

            switch(c) {
                case EMPTY:
                    DOMcell.className = 'cell empty'
                    break;

                case STATIC:
                    DOMcell.className = 'cell static'
                    break;

                case ACTIVE:
                    DOMcell.className = 'cell active'
                    break;

                default:
                    throw new Error('unidentified cell');
            }

            DOMrow.appendChild(DOMcell);
        })

        DOMboard.appendChild(DOMrow);
    })

    return DOMboard;
}

const INITDOMboard = boardBuilder(INITboard);

INITDOMboard.className = 'board'

export {INITDOMboard}