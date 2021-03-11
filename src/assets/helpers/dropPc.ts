
import produce from 'immer';
import { Piece } from '../pieces/index'

export const dropPc = (Pc: Piece) => {

    const droppedPc = produce(Pc, draft => {
        draft.pivot[0] += 1
    }) as Piece;
    

    return droppedPc;
}
