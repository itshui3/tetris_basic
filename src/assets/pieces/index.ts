export interface Piece {
    pivot: number[],
    form: number,
    forms: number[][][]
}

let Pieces: Piece[] = [];

import { dummy } from './dummyPc';

Pieces.push(dummy);

import { attacher } from './attacher'

export { Pieces, attacher };