export interface Piece {
    pivot: number[],
    form: number,
    forms: number[][][]
};

let Pieces: Piece[] = [];

import { dummy } from './dummyPc';
import { iBlock } from './iBlock';

Pieces.push(dummy);

Pieces.push(iBlock);

import { attacher } from './attacher';

export { Pieces, attacher };