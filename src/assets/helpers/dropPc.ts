
import produce from 'immer';
import { Piece } from '../pieces/index'

import { buildDropCoords } from './buildDropCoords'
import { validateDrop } from './validateDrop'

export const dropPc = (Pc: Piece) => {
    console.log('pc', Pc);

    const droppedPc = produce(Pc, draft => {
        draft.pivot[0] += 1
    }) as Piece;
    

    console.log('droppedPc', droppedPc);
    return droppedPc;
}
