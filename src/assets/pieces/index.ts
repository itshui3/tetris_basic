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
import { zBlock } from './zBlock';

//blocks
// Pieces.push(iBlock);
// Pieces.push(jBlock);
// Pieces.push(LBlock);
// Pieces.push(oBlock);
// Pieces.push(sBlock);
// Pieces.push(tBlock);
Pieces.push(zBlock);

import { attacher } from './attacher';

export { Pieces, attacher };