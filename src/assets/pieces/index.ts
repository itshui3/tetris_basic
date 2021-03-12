export interface Piece {
    pivot: number[],
    form: number,
    forms: number[][][]
};

let Pieces: Piece[] = [];

import { dummy } from './dummyPc';
import { iBlock } from './iBlock';
import { jBlock } from './jBlock';
import { LBlock } from './lBlock';

Pieces.push(dummy);
//blocks
Pieces.push(iBlock);
Pieces.push(jBlock);
Pieces.push(LBlock);

import { attacher } from './attacher';

export { Pieces, attacher };