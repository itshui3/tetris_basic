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
import { oBlock } from './oBlock';
import { sBlock } from './sBlock';
import { tBlock } from './tBlock';

//blocks
// Pieces.push(iBlock);
// Pieces.push(jBlock);
// Pieces.push(LBlock);
// Pieces.push(oBlock);
// Pieces.push(sBlock);
Pieces.push(tBlock);

import { attacher } from './attacher';

export { Pieces, attacher };