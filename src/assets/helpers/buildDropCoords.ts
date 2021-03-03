

import produce from 'immer';
import { Piece } from '../pieces/index'

import { buildAttachables } from './buildAttachables'

export const buildDropCoords = (Pc: Piece) => {
    const pcLoweredPivot = produce(Pc, draft => {
        draft.pivot[0] += 1
    }) as Piece;

    return buildAttachables( pcLoweredPivot );
}