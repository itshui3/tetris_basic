// create a jBlock pc of 4 squares
import { Piece } from './index';

export const jBlock: Piece = {
    pivot: [2, 4],
    form: 0,
    forms: [
        [[0, -1], [-1, 0], [-2, 0]],
        [[-1, 0], [0, 1], [0, 2]],
        [[0, 1], [1, 0], [2, 0]],
        [[0, -2], [0, -1], [-1, 0]]
    ]
}