// create a dummy pc of 2 squares
import { Piece } from './index';

export const iBlock: Piece = {
    pivot: [1, 4],
    form: 0,
    forms: [
        [[-1, 0], [1, 0], [2, 0]],
        [[0, -2], [0, -1], [0, 1]],
        [[-2, 0], [-1, 0], [1, 0]],
        [[0, -1], [0, 1], [0, 2]]
    ]
}