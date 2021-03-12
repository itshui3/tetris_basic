export interface Piece {
    pivot: number[],
    form: number,
    forms: number[][][]
};

let Pieces: Piece[] = [];

import { dummy } from './dummyPc';
import { iBlock } from './iBlock';
import { jBlock } from './jBlock';

Pieces.push(dummy);
//blocks
Pieces.push(iBlock);
Pieces.push(jBlock);

import { attacher } from './attacher';

export { Pieces, attacher };