// create a zBlock pc of 4 squares
import { Piece } from './index';

export const zBlock: Piece = {
    pivot: [1, 4],
    form: 0,
    forms: [
        [[-1, -1], [-1, 0], [0, 1]],
        [[-1, 1], [0, 1], [1, 0]],
        [[0, -1], [1, 0], [1, 1]],
        [[1, -1], [0, -1], [-1, 0]]
    ]
};